interface ListInterface {
  items: string[]
}

export default function List({ items }: ListInterface) {
  return (
    <ul>
      {items.map((item) => (
        <li
          key={item}
          className='font-sans text-base font-base tracking-wide leading-tight flex gap-2'
        >
          <span>&#8208;</span>
          {item}
        </li>
      ))}
    </ul>
  )
}
