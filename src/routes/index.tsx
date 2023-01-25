import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Header from '~/components/header/header'
import { APP_TITLE } from '~/utils/constants'

export default component$(() => {
  return (
    <>
      <Header />
      <div class={'relative flex h-full w-full items-center justify-center'}>
        <div class={'relative'}>
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
      </div>
    </>
  )
})

export const head: DocumentHead = {
  title: APP_TITLE,
}
