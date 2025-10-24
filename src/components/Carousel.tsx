export default function Carousel({ items }: { items: React.ReactElement[] }) {
  return (
    <div className='flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-1 md:px-10 px-4'>
      {items.map((item, index) => (
        <div className='flex-shrink-0 w-[84dvw] max-w-120 snap-start md:scroll-ml-10 scroll-ml-4' key={`Carousel item #${index} ${item.type}`}>
          {item}
        </div>
      ))}
    </div>
  )
}
