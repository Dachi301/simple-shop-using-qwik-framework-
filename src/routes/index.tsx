import { component$, useClientEffect$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Card from '~/components/cards/card'
import Header from '~/components/header/header'
import { APP_TITLE } from '~/utils/constants'

// Image imports
import Ps5Img from '../images/ps5.jpg'
import NikeImg from '../images/nike.jpg'
import NatureImg from '../images/nature.jpg'
import GoatImg from '../images/goat.jpg'

interface CardProps {
  title: string
  body: string
  imgSrc: string
}

export default component$(() => {
  const Items: CardProps = [
    {
      title: 'PS5',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
      imgSrc: `${Ps5Img}`,
    },
    {
      title: 'Nike',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
      imgSrc: `${NikeImg}`,
    },
    {
      title: 'Nature',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
      imgSrc: `${NatureImg}`,
    },
    {
      title: 'Messi',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
      imgSrc: `${GoatImg}`,
    },
    {
      title: 'Lorem2',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
      imgSrc: `${NatureImg}`,
    },
    {
      title: 'Jquery + PHP > React + Laravel',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
      imgSrc: `${NatureImg}`,
    },
    {
      title: 'Qwik',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
      imgSrc: `${NatureImg}`,
    },
    {
      title: 'Node.JS',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
      imgSrc: `${NatureImg}`,
    },
  ]

  useClientEffect$(() => {
    Items.map((item) => {
      // Just for test
      console.log(item)
    })
  })

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
          {Array.isArray(Items) &&
            Items.map((item: any) => (
              <Card
                title={item.title}
                body={item.body}
                imgSrc={`${item.imgSrc}`}
              />
            ))}
        </div>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: APP_TITLE,
}
