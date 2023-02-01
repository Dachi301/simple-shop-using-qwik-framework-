import { component$, useStore, $ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'

import Items from '~/data/items'

export default component$(() => {
  const location = useLocation()
  const id = location.params.itemId

  // Getting data
  const item = Array.isArray(Items)
    ? Items.filter((item: any) => item.id === Number(id))
    : ''

  // State
  const state = useStore({
    count: 1,
    itemPrice: item[0]?.price,
  })

  const handleIncrement$ = $(() => {
    state.count += 1
    state.itemPrice += item[0].price
  })

  const handleDecrement$ = $(() => {
    state.count === 1 ? (state.count = 1) : state.count--
    if (state.itemPrice === item[0].price) {
      state.itemPrice = item[0].price
    } else {
      state.itemPrice -= item[0].price
    }
  })

  return (
    <div>
      <div class={'px-[30px]'}>
        <div class={'relative flex h-full w-full gap-[100px]'}>
          <div class={'mt-[50px] mb-[50px] flex gap-[100px]'}>
            <img src={item[0]?.imgSrc} class={'h-[500px] object-cover'} />
            <div class={'flex flex-col'}>
              <h1 class={'text-[7em]'}>{item[0].title}</h1>
              <div class={'pl-[10px]'}>
                <div class={'flex flex-col gap-[15px]'}>
                  <p class={'text-[22px]'}>ფასი: {state.itemPrice} ₾</p>
                  <div class={'flex items-center gap-[20px]'}>
                    <button
                      class={
                        'rounded-[10px] bg-[gray] py-[10px] px-[20px] text-[25px] outline-0'
                      }
                      onClick$={handleIncrement$}
                    >
                      +
                    </button>
                    <p>{state.count}</p>
                    <button
                      class={
                        'rounded-[10px] bg-[gray] py-[10px] px-[20px] text-[25px] outline-0'
                      }
                      onClick$={handleDecrement$}
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <button
                      class={
                        'mt-[20px] flex translate-y-0 justify-start rounded-[10px] bg-[#e7c128] py-[20px] px-[20px] text-[20px] transition-all active:translate-y-1'
                      }
                    >
                      დამატება კალათაში
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
