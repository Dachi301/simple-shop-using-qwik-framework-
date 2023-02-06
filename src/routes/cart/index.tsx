import { $, component$, useClientEffect$, useContext } from '@builder.io/qwik'

import PS5Img from '../../images/ps5.jpg'

import { CartContext } from '~/context/Cart'

export default component$(() => {
  const state = useContext(CartContext)

  // const handleDelete$ = $(() => {
  //   state.cart.filter
  // })

  return (
    <div class={'w-full'}>
      <div
        class={'relative flex h-full w-full flex-col justify-center px-[10px]'}
      >
        <div class={'mt-[50px] flex justify-center gap-[60px]'}>
          {/* card component */}
          <div class={'flex flex-col gap-[80px]'}>
            {state.cartLength === 0 ? (
              <div>
                <h1 class={'h-full w-full text-center text-[3rem]'}>
                  კალათაში არ გვაქვს ნივთები :(
                </h1>
              </div>
            ) : (
              state.cart.map((item: any) => (
                <div class={'flex gap-[80px]'}>
                  <div
                    class={
                      'flex w-[600px] flex-col gap-[20px] break-all	 border border-black p-[10px]	'
                    }
                  >
                    <img
                      src={item.img}
                      class={'aspect-[3/2] w-full object-contain'}
                    />

                    <div class={'flex flex-col justify-around'}>
                      <div class={'flex flex-col gap-[10px]'}>
                        <h1 class={'text-[20px] '}>ნივთი: {item.title}</h1>
                        <p class={'text-[20px]'}>ფასი: {item.price}₾</p>
                        <p class={'text-[20px] text-green-600'}>
                          რაოდენობა: {item.items}x
                        </p>
                      </div>
                      <button
                        class={
                          ' translate-y-0 rounded-[5px] bg-[red] p-[10px] text-white transition-all active:translate-y-1'
                        }
                      >
                        წაშლა
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
            {state.cartLength !== 0 && (
              <div class={'mb-[50px] flex flex-col items-start gap-[20px]'}>
                <h1 class={'text-[3rem]'}>კალათა: </h1>
                <p class={' text-[1.7rem]'}>ბალანსი: x</p>
                <h1 class={'text-[24px]'}>ნივთები: {state.cart.length}</h1>
                <p class={'text-[20px]'}>ჯამი: x</p>
                <button
                  class={
                    'w-full translate-y-0 rounded-[5px] bg-[#e7c128] px-[15px] py-[10px] text-[24px] transition-all active:translate-y-1 '
                  }
                >
                  შეძენა
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
})
