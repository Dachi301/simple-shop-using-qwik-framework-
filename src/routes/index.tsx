import { component$, useStore, $ } from '@builder.io/qwik'
import { DocumentHead, useNavigate } from '@builder.io/qwik-city'
import { APP_TITLE } from '~/utils/constants'

import Items from '~/data/items'

// Comps
import Card from '~/components/cards/card'
import Header from '~/components/header/header'
import { Button } from '~/components/button'

export default component$(() => {
  const state = useStore({ searchTerm: '', showItems: 0 })
  const nav = useNavigate()

  const truncate = (str: string, n: number) => {
    let shortText = str.length > n ? str.substr(0, n - 1) + '...' : str
    if (shortText.length < n) {
      return str.substr(0, n - 1) + '...'
    }
    return shortText
  }

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
        <Card
          title={item.title}
          body={truncate(item.body, 75)}
          imgSrc={`${item.imgSrc}`}
          price={item.price}
        >
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
        } else if (
          item['title'].toLowerCase().includes(state.searchTerm.toLowerCase())
        ) {
          return item['title']
        }
      }).map((item: any) => (
        <Card
          title={item.title}
          body={truncate(item.body, 75)}
          imgSrc={`${item.imgSrc}`}
          price={item.price}
        >
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
    <div class={'mb-[20px] w-full'}>
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
            onInput$={handleChange$}
            value={state.searchTerm}
          />
          <span class='material-symbols-outlined absolute top-[16px] right-[20px]'>
            search
          </span>
        </div>
        <div
          class={'grid w-full grid-cols-4 gap-x-[30px] gap-y-[30px] px-[30px]'}
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
