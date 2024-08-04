import getCurrentUser from '../actions/getCurrentUser';
import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';

const ListingPage = async () => {
	return (
		<ClientOnly>
			<EmptyState
				title='No favorites found'
				subtitle='Looks like you have no favorite listings'
			/>
		</ClientOnly>
	);
};

export default ListingPage;
