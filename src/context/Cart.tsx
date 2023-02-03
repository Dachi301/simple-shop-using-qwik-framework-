import {
  useStore,
  useContextProvider,
  createContext,
  component$,
  Slot,
} from '@builder.io/qwik'

export const CartContext = createContext('cart-context')

export const ContextSetter = component$(() => {
  const state = useStore({
    cart: [],
    cartLength: 0,
  })

  useContextProvider(CartContext, state)

  return (
    <>
      <Slot />
    </>
  )
})
