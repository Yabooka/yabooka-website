export default function Line({ title }) {
  return (
    <div className='flex relative h-2 tracking-letter text-mini'>
      <div className='w-4 md:w-8 h-px bg-black left-0 top-1/2 absolute'></div>
      <div className='relative pl-8 md:pl-12 uppercase'>{title}</div>
    </div>
  )
}
