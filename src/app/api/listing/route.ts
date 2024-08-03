import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return NextResponse.json(
			{ error: 'User not authenticated' },
			{ status: 401 }
		);
	}

	try {
		const body = await request.json();
		const {
			title,
			description,
			imageSrc,
			category,
			roomCount,
			bathroomCount,
			guestCount,
			location,
			price,
		} = body;

		if (!title || !description || !category || !price) {
			return NextResponse.json(
				{ error: 'Missing required fields' },
				{ status: 400 }
			);
		}

		const listing = await prisma.listing.create({
			data: {
				title,
				description,
				imageSrc,
				category,
				roomCount,
				bathroomCount,
				guestCount,
				locationValue: location?.location?.value || '',
				price: parseInt(price, 10),
				userId: currentUser.id,
			},
		});

		return NextResponse.json(listing);
	} catch (error) {
		console.error('Error creating listing:', error);
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 }
		);
	}
}
