export function PersonDetail({name, hairColor, eyeColor}: {name: string, hairColor: string, eyeColor: string}) {
  return (
    <li>
      {name}
      <ul>
        <li>hair: {hairColor}</li>
        <li>eyes: {eyeColor}</li>
      </ul>
    </li>
  )
}