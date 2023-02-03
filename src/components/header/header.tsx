import {
  component$,
  useClientEffect$,
  useContext,
  useWatch$,
  useResource$,
  useStore,
} from '@builder.io/qwik'
import { useNavigate } from '@builder.io/qwik-city'
import { CartContext } from '~/context/Cart'

const Header = component$(() => {
  const nav = useNavigate()

  const ctxState = useContext(CartContext)

  return (
    <>
      <header class='flex items-center justify-between bg-[#e7c128] px-[30px] py-[20px]'>
        <p
          class='cursor-pointer text-[2rem] text-white'
          onClick$={() => {
            nav.path = `/`
          }}
        >
          Simple Shop System
        </p>
        <div class={'relative'}>
          <p
            onClick$={() => {
              nav.path = '/cart'
            }}
            class='cursor-pointer text-[2rem] text-white'
          >
            Cart
          </p>
          <div
            class={
              'absolute top-0 left-[-15px] flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[50%] bg-black text-[14px] text-white'
            }
          >
            {/* {state} */}
            {ctxState.cartLength}
          </div>
        </div>
      </header>
    </>
  )
})

export default Header
