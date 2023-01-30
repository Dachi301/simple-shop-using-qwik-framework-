import { Slot, component$ } from '@builder.io/qwik'
import Items from '~/data/items'

interface PropsTypes {
  title: string
  body: string
  imgSrc: string
  price: number
}

const Card = component$(({ title, body, imgSrc, price }: PropsTypes) => {
  return (
    <>
      <div
        class={
          'flex w-full flex-col gap-[10px] rounded-[10px] border border-[black] p-[10px]'
        }
      >
        <img class={'aspect-[3/2.5] h-full object-cover'} src={imgSrc} />
        <h1 class={'text-center text-[20px]'}>{title}</h1>
        <p class={'text-[15px]'}>{body}</p>
        <p class={'text-[22px]'}>ფასი: {price}₾</p>
        <div class={'flex items-center justify-center'}>
          <Slot />
        </div>
      </div>
    </>
  )
})

export default Card
