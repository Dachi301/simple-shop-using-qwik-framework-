import {
  Slot,
  component$,
  useClientEffect$,
  useContext,
} from '@builder.io/qwik'
import Items from '~/data/items'

interface PropsTypes {
  title: string
  imgSrc: string
  price: number
}

// import { MyContext } from '~/routes/cart'

const Card = component$(({ title, imgSrc, price }: PropsTypes) => {
  // const state = useContext(MyContext)

  return (
    <>
      <div
        class={
          'flex w-full flex-col gap-[10px] rounded-[10px] border border-[black] p-[10px]'
        }
      >
        <img class={'aspect-[3/2.5] h-full object-cover'} src={imgSrc} />
        <h1 class={'text-center text-[20px]'}>{title}</h1>
        <p class={'text-[22px]'}>ფასი: {price}₾</p>

        <div class={'flex items-center justify-center'}>
          <Slot />
        </div>
      </div>
    </>
  )
})

export default Card
