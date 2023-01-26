import { Slot, component$ } from '@builder.io/qwik'

interface PropsTypes {
  title: string
  body: string
  imgSrc: string
}

const Card = component$(({ title, body, imgSrc }: PropsTypes) => {
  return (
    <div
      class={
        'flex w-full flex-col gap-[10px] rounded-[10px] border border-[black] p-[10px]'
      }
    >
      <img class={'aspect-[3/2.5] h-full object-cover'} src={imgSrc} />
      <h1 class={'text-center'}>{title}</h1>
      <p class={'text-[12px]'}>{body}</p>
      <div class={'flex items-center justify-center'}>
        <Slot />
      </div>
    </div>
  )
})

export default Card
