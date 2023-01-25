import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Header from '~/components/header/header'
import { APP_TITLE } from '~/utils/constants'

export default component$(() => {
  return (
    <div class={'w-full'}>
      <Header />
      <div
        class={
          'relative flex h-full w-full flex-col items-center justify-center'
        }
      >
        <div class={'relative mb-[80px]'}>
          <input
            type={'text'}
            class={
              'h-[60px] w-[700px] rounded-[10px] border-2 border-[#e7c128] pl-[20px] pr-[50px] text-[20px] outline-0'
            }
            placeholder='...'
          />
          <span class='material-symbols-outlined absolute top-[16px] right-[20px]'>
            search
          </span>
        </div>
        <div class={'grid w-[80%] grid-cols-4 gap-x-[10px] gap-y-[30px]'}>
          <div
            class={'h-[450px] w-[300px] rounded-[10px] border border-[black]'}
          ></div>
          <div
            class={'h-[450px] w-[300px] rounded-[10px] border border-[black]'}
          ></div>
          <div
            class={'h-[450px] w-[300px] rounded-[10px] border border-[black]'}
          ></div>
          <div
            class={'h-[450px] w-[300px] rounded-[10px] border border-[black]'}
          ></div>
          <div
            class={'h-[450px] w-[300px] rounded-[10px] border border-[black]'}
          ></div>
        </div>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: APP_TITLE,
}
