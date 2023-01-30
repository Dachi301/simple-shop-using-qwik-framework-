import { component$, useStore, useWatch$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'

// Component
import Header from '~/components/header/header'
import Items from '~/data/items'

export default component$(() => {
  const location = useLocation()
  const id = location.params.itemId

  // State

  // Getting data
  const item = Items.filter((item: any) => item.id === Number(id))
  const state = useStore({
    count: 1,
    itemPrice: item[0]?.price,
  })

  return (
    <div>
      <Header />
      <div class={'px-[30px]'}>
        <div class={'flex gap-[100px]'}>
          <img src={item[0]?.imgSrc} class={'h-[500px] object-cover'} />
          <div class={'flex flex-col'}>
            <h1 class={'text-[7em]'}>{item[0].title}</h1>
            <div class={'pl-[10px]'}>
              <p class={'mb-[20px] text-[22px]'}>{item[0].body}</p>
              <div class={'flex flex-col gap-[15px]'}>
                <p class={'text-[22px]'}>{state.itemPrice} ₾</p>
                <div class={'flex items-center gap-[20px]'}>
                  <button
                    class={
                      'rounded-[10px] bg-[gray] py-[10px] px-[20px] text-[25px] outline-0'
                    }
                    onClick$={() => {
                      state.count += 1
                      state.itemPrice += item[0].price
                    }}
                  >
                    +
                  </button>
                  <p>{state.count}</p>
                  <button
                    class={
                      'rounded-[10px] bg-[gray] py-[10px] px-[20px] text-[25px] outline-0'
                    }
                    onClick$={() => {
                      state.count === 1 ? (state.count = 1) : state.count--
                      if (state.itemPrice === item[0].price) {
                        state.itemPrice = item[0].price
                      } else {
                        state.itemPrice -= item[0].price
                      }
                    }}
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
  )
})
