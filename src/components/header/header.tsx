import { $, component$, useContext, useStore } from '@builder.io/qwik'
import { useNavigate } from '@builder.io/qwik-city'
import { CartContext } from '~/context/Cart'
import AuthModal from '../modals/auth-modal'

const Header = component$(() => {
  const nav = useNavigate()

  const ctxState = useContext(CartContext)
  const store = useStore({ modalState: 'closed' })

  return (
    <>
      <header class='flex items-center justify-between bg-[#e7c128] px-[30px] py-[20px] md:px-[20px]'>
        <p
          class='cursor-pointer text-[2rem] text-white md:text-[20px]'
          onClick$={() => {
            nav.path = `/`
          }}
        >
          Simple Shop System
        </p>
        <div class={'flex items-center gap-[40px]'}>
          {' '}
          <p
            onClick$={() => (store.modalState = 'open')}
            class='flex cursor-pointer text-[2rem] text-white md:hidden'
          >
            Login
          </p>
          <div class={'relative'}>
            <p
              onClick$={() => {
                nav.path = '/cart'
              }}
              class='flex cursor-pointer text-[2rem] text-white md:hidden'
            >
              Cart
            </p>
            <div
              class={
                'absolute top-0 left-[-15px] flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[50%] bg-black text-[14px] text-white md:hidden'
              }
            >
              {/* {state} */}
              {ctxState.cartLength}
            </div>
          </div>
          <div class={'hidden gap-[20px] md:flex'}>
            <div
              class={'relative'}
              onClick$={() => {
                nav.path = '/cart'
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='white'
                className='hidden h-6 w-6 md:flex'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
              <div
                class={
                  'absolute top-[-10px] left-[-15px] hidden h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[50%] bg-black text-[14px] text-white md:flex'
                }
              >
                {/* {state} */}
                {ctxState.cartLength}
              </div>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='white'
              class='hidden h-6 w-6 md:flex'
              onClick$={() => (store.modalState = 'open')}
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
              />
            </svg>
          </div>
        </div>
      </header>

      <AuthModal modalState={store.modalState}>
        <form className='relative w-[700px] rounded-[10px] bg-white p-[20px] lg:w-[80vw] md:w-[90vw]'>
          <div className='flex flex-col gap-[20px]'>
            <h1 className='text-center text-[26px] font-bold md:text-[22px]'>
              ავტორიზაცია
            </h1>
            <div className='flex flex-col gap-[40px]'>
              <div>
                <p className='text-[22px]'>საფულე</p>
                <input
                  type='text'
                  className='w-full rounded-[10px] border-0 bg-[#F3F3F4] py-[15px] px-[20px] text-[18px] outline-0'
                  placeholder='...'
                />
              </div>
              <div>
                <button className='w-full translate-y-0 rounded-[10px] bg-[#e7c128] py-[12px] px-[20px] text-[20px] text-[black] outline-0 transition-all hover:bg-black hover:text-[#e7c128] active:translate-y-1'>
                  შესვლა
                </button>
              </div>
            </div>
          </div>

          <div
            onClick$={() => {
              store.modalState = 'closed'
            }}
            className='absolute top-[20px] right-[20px] cursor-pointer'
          >
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <mask
                id='mask0_112_7508'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='25'
                height='25'
              >
                <rect
                  x='0.354187'
                  y='0.438477'
                  width='24'
                  height='24'
                  fill='#D9D9D9'
                />
              </mask>
              <g mask='url(#mask0_112_7508)'>
                <path
                  d='M6.75419 19.4385L5.35419 18.0385L10.9542 12.4385L5.35419 6.83848L6.75419 5.43848L12.3542 11.0385L17.9542 5.43848L19.3542 6.83848L13.7542 12.4385L19.3542 18.0385L17.9542 19.4385L12.3542 13.8385L6.75419 19.4385Z'
                  fill='#16110D'
                />
              </g>
            </svg>
          </div>
        </form>
      </AuthModal>
    </>
  )
})

export default Header
