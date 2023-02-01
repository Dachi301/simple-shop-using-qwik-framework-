import { component$ } from '@builder.io/qwik'

import PS5Img from '../../images/ps5.jpg'

export default component$(() => {
  return (
    <div class={'w-full'}>
      <div
        class={'relative flex h-full w-full flex-col justify-center px-[10px]'}
      >
        <div class={'mt-[50px] flex justify-center gap-[60px]'}>
          {/* card component */}
          <div class={'flex flex-col gap-[10px]'}>
            <div
              class={
                'flex w-[700px] gap-[20px] break-all	 border border-black p-[10px]	'
              }
            >
              <img
                src={PS5Img}
                class={'aspect-[3/2] w-[400px] object-contain'}
              />

              <div class={'flex flex-col justify-around'}>
                <div class={'flex flex-col gap-[10px]'}>
                  <h1 class={'text-[20px] '}>ნივთი: PS5</h1>
                  <p class={'text-[20px]'}>ფასი: 1900</p>
                  <p class={'text-[20px] text-green-600'}>რაოდენობა: 2x</p>
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
            <div
              class={
                'flex w-[700px] gap-[20px] break-all	 border border-black p-[10px]	'
              }
            >
              <img
                src={PS5Img}
                class={'aspect-[3/2] w-[400px] object-contain'}
              />

              <div class={'flex flex-col justify-around'}>
                <div class={'flex flex-col gap-[10px]'}>
                  <h1 class={'text-[20px] '}>ნივთი: PS5</h1>
                  <p class={'text-[20px]'}>ფასი: 1900</p>
                  <p class={'text-[20px] text-green-600'}>რაოდენობა: 2x</p>
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

          <div class={'flex flex-col gap-[20px]'}>
            <h1 class={'text-[3rem]'}>კალათა</h1>
            <p class={' text-[1.7rem]'}>ბალანსი: 100₾</p>
            <h1 class={'text-[24px]'}>ნივთები: 2</h1>
          </div>
        </div>
      </div>
    </div>
  )
})
