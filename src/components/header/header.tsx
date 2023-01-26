import { component$ } from '@builder.io/qwik'
import { useNavigate } from '@builder.io/qwik-city'

const Header = component$(() => {
  const nav = useNavigate()
  return (
    <>
      <header class='mb-[50px] flex items-center justify-between bg-[#e7c128] px-[30px] py-[20px]'>
        <p
          class='cursor-pointer text-[2rem] text-white'
          onClick$={() => {
            nav.path = `/`
          }}
        >
          Simple Shop System
        </p>
        <div class={'relative'}>
          <p class='cursor-pointer text-[2rem] text-white'>Cart</p>
          <div
            class={
              'absolute top-0 left-[-15px] flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[50%] bg-black text-[14px] text-white'
            }
          >
            0
          </div>
        </div>
      </header>
    </>
  )
})

export default Header
