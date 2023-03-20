import { v4 as uuidv4 } from 'uuid';

export function PersonDetail({
	name,
	hairColor,
	eyeColor,
}: {
	name: string;
	hairColor: string;
	eyeColor: string;
}) {
	return (
		<li key={uuidv4()}>
			{name}
			<ul>
				<li key={uuidv4()}>hair: {hairColor}</li>
				<li key={uuidv4()}>eyes: {eyeColor}</li>
			</ul>
		</li>
	);
}
