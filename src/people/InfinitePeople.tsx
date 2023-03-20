import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';

import { PersonDetail } from './PersonDetail';
import { Person } from '../types/types';

const initialURL = 'https://swapi.dev/api/people/';

const fetchURL = async (url: string) => {
	const response = await fetch(url);
	return response.json();
};

export function InfinitePeople() {
	const { data, fetchNextPage, hasNextPage, status, isFetching } = useInfiniteQuery(
		'sw-people',
		({ pageParam = initialURL }) => fetchURL(pageParam),
		{
			getNextPageParam: (lastPage, pages) => {
				return lastPage?.next;
			},
		}
	);

	const loadMore = (page: number) => {
		fetchNextPage(data?.pages[page]?.next || initialURL);
	};

	if (status === 'loading') return <div className='loading'>Loading...</div>;

	if (status === 'error') return <div>Error, fetching data...</div>;

	return (
		<>
			{isFetching && <div className='loading'>Loading...</div>}
			<InfiniteScroll loadMore={loadMore} hasMore={hasNextPage}>
				{data?.pages.map((pageData) =>
					pageData.results.map((person: Person) => (
						<PersonDetail
							name={person.name}
							hairColor={person.hair_color}
							eyeColor={person.eye_color}
						/>
					))
				)}
			</InfiniteScroll>
		</>
	);
}
