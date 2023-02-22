import {
  component$,
  useStore,
  $,
  useContext,
  useClientEffect$,
} from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import { CartContext } from '~/context/Cart'

import Items from '~/data/items'

export default component$(() => {
  const location = useLocation()
  const id = location.params.itemId

  // Getting data
  const item = Array.isArray(Items)
    ? Items.filter((item: any) => item.id === Number(id))
    : ''
  const ctxState = useContext(CartContext)

  // State
  const state = useStore({
    count: 1,
    itemPrice: item[0]?.price,
    item: {},
    isDisabled: false,
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

  const handleDisableButton$ = $(() => {
    ctxState.cart.forEach((element: any) => {
      if (element.id === item[0].id) {
        state.isDisabled = true
      }
    })
  })

  const handleClick$ = $(() => {
    state.item = {
      id: item[0].id,
      title: item[0].title,
      items: state.count,
      price: state.itemPrice,
      img: item[0]?.imgSrc,
    }

    ctxState.cart.push(state.item)
    ctxState.cartLength += 1
    handleDisableButton$()
  })

  useClientEffect$(() => handleDisableButton$())

  return (
    <div>
      <div class={'px-[30px] xllg:px-[20px]'}>
        <div
          class={'relative flex h-full w-full gap-[100px] xllg:justify-center'}
        >
          <div
            class={
              'mt-[50px] mb-[50px] flex gap-[100px] xllg:flex-col xllg:gap-[50px]'
            }
          >
            <img
              src={item[0]?.imgSrc}
              class={'h-[500px] object-cover xllg:h-full'}
            />
            <div class={'flex flex-col'}>
              <h1 class={'text-[7em] md:text-[15vw]'}>{item[0].title}</h1>
              <div class={'pl-[10px] md:pl-[0]'}>
                <div class={'flex flex-col gap-[15px]'}>
                  <p class={'text-[22px]'}>
                    ფასი: {state.isDisabled ? item[0]?.price : state.itemPrice}{' '}
                    ₾
                  </p>
                  <div class={'flex items-center gap-[20px]'}>
                    <button
                      class={`rounded-[10px] bg-[gray] py-[10px] px-[20px] text-[25px] outline-0 ${
                        state.isDisabled && 'opacity-[0.6] active:translate-y-0'
                      }`}
                      onClick$={handleIncrement$}
                      disabled={state.isDisabled ? true : false}
                    >
                      +
                    </button>
                    <p>{state.isDisabled ? 1 : state.count}</p>
                    <button
                      class={`rounded-[10px] bg-[gray] py-[10px] px-[20px] text-[25px] outline-0 ${
                        state.isDisabled && 'opacity-[0.6] active:translate-y-0'
                      } `}
                      onClick$={handleDecrement$}
                      disabled={state.isDisabled ? true : false}
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <button
                      class={`mt-[20px] flex translate-y-0 justify-start rounded-[10px] bg-[#e7c128] py-[20px] px-[20px] text-[20px] opacity-[1] active:translate-y-1 ${
                        state.isDisabled && 'opacity-[0.7] active:translate-y-0'
                      } transition-all`}
                      onClick$={handleClick$}
                      disabled={state.isDisabled}
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
