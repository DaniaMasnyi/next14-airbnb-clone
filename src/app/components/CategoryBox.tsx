'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import { useCallback, useEffect, useState } from 'react';
import { IconType } from 'react-icons';

interface CategoryBoxProps {
	icon: IconType;
	label: string;
	selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ icon: Icon, label }) => {
	const router = useRouter();
	const params = useSearchParams();
	const [isSelected, setIsSelected] = useState(false);

	useEffect(() => {
		if (params) {
			const currentCategory = params.get('category');
			setIsSelected(currentCategory === label);
		}
	}, [params, label]);

	const handleClick = useCallback(() => {
		let currentQuery = {};

		if (params) {
			currentQuery = queryString.parse(params.toString());
		}

		const updatedQuery: any = {
			...currentQuery,
			category: label,
		};

		if (isSelected) {
			delete updatedQuery.category;
		}

		const url = queryString.stringifyUrl(
			{
				url: '/',
				query: updatedQuery,
			},
			{ skipNull: true }
		);

		router.push(url);
	}, [isSelected, label, params, router]);

	return (
		<div
			onClick={handleClick}
			className={`
        flex
        flex-col
        items-center
        justify-center
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${isSelected ? 'text-neutral-800' : 'text-neutral-500'}
        ${isSelected ? 'border-b-neutral-800' : 'border-transparent'}
      `}
		>
			<Icon size={25} />
			<div className='font-medium text-sm'>{label}</div>
		</div>
	);
};

export default CategoryBox;
