import { v4 as uuidv4 } from 'uuid';

export function SpeciesDetail({
	name,
	language,
	averageLifespan,
}: {
	name: string;
	language: string;
	averageLifespan: string;
}) {
	return (
		<li key={uuidv4()}>
			{name}
			<ul>
				<li key={uuidv4()}>language: {language}</li>
				<li key={uuidv4()}>average lifespan: {averageLifespan}</li>
			</ul>
		</li>
	);
}
