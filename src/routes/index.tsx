import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Card from '~/components/cards/card'
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
        <div class={'relative mb-[50px]'}>
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
        <div
          class={'grid w-full grid-cols-4 gap-x-[30px] gap-y-[30px] px-[30px]'}
        >
          <Card title='text1' body='loremdoasfoasdkfo' />
          <Card title='text2' body='lorem2' />
          <Card title='text3' body='lorem3' />
          <Card title='text4' body='lorem4' />
          <Card title='text5' body='lorem5' />
        </div>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: APP_TITLE,
}
