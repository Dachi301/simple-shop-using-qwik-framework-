import { component$, useStore, $ } from '@builder.io/qwik'
import { DocumentHead, useNavigate } from '@builder.io/qwik-city'
import { APP_TITLE } from '~/utils/constants'

import Items from '~/data/items'

// Comps
import Card from '~/components/cards/card'
import Header from '~/components/header/header'
import { Button } from '~/components/button'

export default component$(() => {
  const state = useStore({ searchTerm: '' })
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
  })

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
            onChange$={handleChange$}
          />
          <span class='material-symbols-outlined absolute top-[16px] right-[20px]'>
            search
          </span>
        </div>
        <div
          class={'grid w-full grid-cols-4 gap-x-[30px] gap-y-[30px] px-[30px]'}
        >
          {Array.isArray(Items) &&
            Items.map((item: any) => (
              <Card
                title={item.title}
                body={truncate(item.body, 75)}
                imgSrc={`${item.imgSrc}`}
              >
                <Button
                  action$={() => {
                    nav.path = `/item/${item.id}`
                  }}
                />
              </Card>
            ))}

          {/* {Array.isArray(Items) && Items.filter()} */}
        </div>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: APP_TITLE,
}
