import { Slot, component$ } from '@builder.io/qwik'

interface PropsTypes {
  title: string
  imgSrc: string
  price: number
}

const Card = component$(({ title, imgSrc, price }: PropsTypes) => {
  return (
    <>
      <div
        class={
          'flex w-full flex-col gap-[10px] rounded-[10px] border border-[black] p-[10px]'
        }
      >
        <img class={'aspect-[3/2.5] h-full object-cover'} src={imgSrc} />
        <h1 class={'text-center text-[20px] lg:text-[18px]'}>{title}</h1>
        <p class={'text-[22px] lg:text-[18px]'}>ფასი: {price}₾</p>

        <div class={'flex items-center justify-center'}>
          <Slot />
        </div>
      </div>
    </>
  )
})

export default Card
