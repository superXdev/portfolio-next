function Hamburger() {
    return (
        <div className='sm:hidden flex flex-col w-7 h-5 cursor-pointer justify-between'>
          <span className='h-0.5 bg-black'></span>
          <span className='h-0.5 bg-black'></span>
          <span className='h-0.5 bg-black'></span>
        </div>
    )
}

export default Hamburger