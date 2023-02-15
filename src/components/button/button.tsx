import { component$, PropFunction } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

interface ButtonProps {
  action$?: PropFunction<() => void>
}

export const Button = component$((props: ButtonProps) => {
  return (
    <button
      class={
        'w-[30%] translate-y-0 rounded-[20px] bg-[#e7c128] py-[5px] text-[2vh] text-black transition-all hover:bg-[#000] hover:text-[#e7c128] active:translate-y-1'
      }
      onClick$={props.action$}
    >
      View
    </button>
  )
})
