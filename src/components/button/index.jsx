export default function Button({ children }) {
  return (
    <button className='text-tiny font-EM uppercase border-b-2 tracking-small border-red mt-10 pb-2 text-black hover:text-red'>
      {children}
    </button>
  )
}
