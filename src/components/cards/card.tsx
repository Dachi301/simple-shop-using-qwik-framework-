import { component$ } from '@builder.io/qwik'

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
      <p class={'font text-[12px] font-[200]'}>{body}</p>
      <div class={'flex items-center justify-center'}>
        <button
          class={
            'w-[30%] translate-y-0 rounded-[20px] bg-[#e7c128] py-[5px] text-[2vh] text-black transition-all hover:bg-[#000] hover:text-[#e7c128] active:translate-y-1'
          }
        >
          View
        </button>
      </div>
    </div>
  )
})

export default Card
