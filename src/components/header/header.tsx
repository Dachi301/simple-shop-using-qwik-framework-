import { component$ } from '@builder.io/qwik'

const Header = component$(() => {
  return (
    <>
      <header class='mb-[40px] flex items-center justify-between bg-[#e7c128] px-[10px] py-[20px]'>
        <p class='text-[2rem] text-white'>Simple Shop System</p>
        <p class='text-[2rem] text-white'>Cart</p>
      </header>
    </>
  )
})

export default Header
