import { component$ } from '@builder.io/qwik'

interface PropsTypes {
  title: string
  body: string
}

const Card = component$(({ title, body }: PropsTypes) => {
  return (
    <div
      class={
        'flex w-[23%] flex-col gap-[10px] rounded-[10px] border border-[black] p-[10px]'
      }
    >
      <img src='https://w0.peakpx.com/wallpaper/203/1010/HD-wallpaper-forest-flora-forest-vithurshan-dark-europe-faded-green-leaf-mood-moody-sri-lanka-vithurshan-jpeg-wood.jpg' />
      <h1 class={'text-center'}>{title}</h1>
      <p class={'font text-[12px] font-[200]'}>{body}</p>
      <div class={'flex items-center justify-center'}>
        <button
          class={
            'w-[30%] rounded-[20px] bg-[#00b3ff] py-[5px] text-[2vh] text-black transition-[0.3s] hover:bg-[#0066ff] hover:text-white'
          }
        >
          View
        </button>
      </div>
    </div>
  )
})

export default Card
