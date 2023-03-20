import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';
import { Species } from '../types/types';
import { SpeciesDetail } from './Species';

const initialUrl = 'https://swapi.dev/api/species/';
const fetchUrl = async (url: string) => {
	const response = await fetch(url);
	return response.json();
};

export function InfiniteSpecies() {
	const { data, hasNextPage, fetchNextPage, status, isFetching } =
		useInfiniteQuery(
			'sw-species',
			({ pageParam = initialUrl }) => fetchUrl(pageParam),
			{
				getNextPageParam: (lastPage, pages) => lastPage?.next,
			}
		);

	const loadMore = (page: number) => {
		fetchNextPage(data?.pages[page]?.next || initialUrl);
	};

	if (status === 'loading') return <div className='loading'>Loading...</div>;

	if (status === 'error') return <div>Oops, something went wrong</div>;

	return (
		<InfiniteScroll hasMore={hasNextPage} loadMore={loadMore}>
			<>
				{isFetching && <div className='loading'>Loading...</div>}
				{data?.pages.map((pageData) =>
					pageData?.results.map((species: Species) => (
						<SpeciesDetail
							name={species.name}
							language={species.language}
							averageLifespan={species.average_lifespan}
						/>
					))
				)}
			</>
		</InfiniteScroll>
	);
}
