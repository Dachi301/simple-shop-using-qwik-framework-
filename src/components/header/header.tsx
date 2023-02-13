import { $, component$, useContext, useStore } from '@builder.io/qwik'
import { useNavigate } from '@builder.io/qwik-city'
import { CartContext } from '~/context/Cart'
import AuthModal from '../modals/auth-modal'
import React from 'react'

const Header = component$(() => {
  const nav = useNavigate()

  const ctxState = useContext(CartContext)
  const store = useStore({ modalState: 'closed' })
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
        <div class={'flex items-center gap-[40px]'}>
          {' '}
          <p
            onClick$={() => (store.modalState = 'open')}
            class='cursor-pointer text-[2rem] text-white'
          >
            Login
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
        </div>
      </header>

      <AuthModal modalState={store.modalState}>
        <form className='relative w-[700px] rounded-[10px] bg-white p-[20px]'>
          <div className='flex flex-col gap-[20px]'>
            <h1 className='text-center text-[26px] font-bold'>ავტორიზაცია</h1>
            <div className='flex flex-col gap-[40px]'>
              <div>
                <p className='text-[20px]'>ტოკენი</p>
                <input
                  type='text'
                  className='w-full rounded-[10px] border-0 bg-[#F3F3F4] py-[15px] px-[10px] text-[18px] outline-0'
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
