export default function List({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li
          className='flex gap-1 mb-1 last:mb-0'
          key={`List item ${index} ${item}`}
        >
          <span>&#8208;</span> {item}
        </li>
      ))}
    </ul>
  )
}
