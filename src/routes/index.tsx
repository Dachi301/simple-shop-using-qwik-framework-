import {
  component$,
  useStore,
  $,
  useContext,
  useClientEffect$,
} from '@builder.io/qwik'
import { DocumentHead, useNavigate } from '@builder.io/qwik-city'
import { APP_TITLE } from '~/utils/constants'

import Items from '~/data/items'

// Comps
import Card from '~/components/cards/card'

import { Button } from '~/components/button'

export default component$(() => {
  const state = useStore({ searchTerm: '', showItems: 0 })
  const nav = useNavigate()

  const handleChange$ = $((e: any) => {
    state.searchTerm = e.target.value

    if (state.searchTerm) {
      state.showItems = 1
    } else {
      state.showItems = 0
    }
  })

  const fetchItems = () => {
    return (
      Array.isArray(Items) &&
      Items.map((item: any) => (
        <Card title={item.title} imgSrc={`${item.imgSrc}`} price={item.price}>
          <Button
            action$={() => {
              nav.path = `/item/${item.id}`
            }}
          />
        </Card>
      ))
    )
  }

  const filterItems = () => {
    return (
      Array.isArray(Items) &&
      Items.filter((item: any) => {
        if (!state.searchTerm) {
          console.log('')
          return ''
        } else if (
          item['title'].toLowerCase().includes(state.searchTerm.toLowerCase())
        ) {
          return item['title']
        }
      }).map((item: any) => (
        <Card title={item.title} imgSrc={`${item.imgSrc}`} price={item.price}>
          <Button
            action$={() => {
              nav.path = `/item/${item.id}`
            }}
          />
        </Card>
      ))
    )
  }

  return (
    <div class={' w-full'}>
      <div
        class={
          'relative flex h-full w-full flex-col items-center justify-center'
        }
      >
        <div class={'relative mb-[50px] mt-[50px]'}>
          <input
            type={'text'}
            class={
              'h-[60px] w-[700px] rounded-[10px] border-2 border-[#e7c128] pl-[20px] pr-[50px] text-[20px] outline-0'
            }
            placeholder='...'
            onInput$={handleChange$}
            value={state.searchTerm}
          />

          <div class={'absolute top-[16px] right-[20px]'}>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21.354 20.646L17.345 16.637C18.681 15.135 19.501 13.164 19.501 11C19.501 6.313 15.688 2.5 11.001 2.5C6.31398 2.5 2.50098 6.313 2.50098 11C2.50098 15.687 6.31398 19.5 11.001 19.5C13.165 19.5 15.136 18.68 16.638 17.344L20.647 21.353C20.745 21.451 20.873 21.499 21.001 21.499C21.129 21.499 21.257 21.45 21.355 21.353C21.549 21.158 21.549 20.842 21.354 20.646ZM3.5 11C3.5 6.865 6.864 3.5 11 3.5C15.136 3.5 18.5 6.865 18.5 11C18.5 15.135 15.136 18.5 11 18.5C6.864 18.5 3.5 15.135 3.5 11Z'
                fill='#2D2A2A'
              />
            </svg>
          </div>
        </div>
        <div
          class={
            'mb-[50px] grid w-full grid-cols-4 gap-x-[30px] gap-y-[30px] px-[30px]'
          }
        >
          {state.showItems === 0 && fetchItems()}

          {state.showItems === 1 && filterItems()}
        </div>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: APP_TITLE,
}
