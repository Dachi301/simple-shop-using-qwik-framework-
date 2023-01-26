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
  id: number
  title: string
  body: string
  imgSrc: string
}

export default component$(() => {
  const Items: CardProps = [
    {
      id: new Date().valueOf(),
      title: 'PS5',
      body: 'Lorem ipsum dolor, sit amet elit asdfasfg',
      imgSrc: `${Ps5Img}`,
    },
    {
      id: new Date().valueOf(),
      title: 'Nike',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit fsgregqer t',
      imgSrc: `${NikeImg}`,
    },
    {
      id: new Date().valueOf(),
      title: 'Nature',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elittr rtq qwrqwer qewr qwewr',
      imgSrc: `${NatureImg}`,
    },
    {
      id: new Date().valueOf(),
      title: 'Messi',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit yyyt5 hnbret asFSDsd asd as',
      imgSrc: `${GoatImg}`,
    },
    {
      id: new Date().valueOf(),
      title: 'Lorem2',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elit',
      imgSrc: `${NatureImg}`,
    },
    {
      id: new Date().valueOf(),
      title: 'Jquery + PHP > React + Laravel',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit g gtew gtehyh r trewr rewt',
      imgSrc: `${NatureImg}`,
    },
    {
      id: new Date().valueOf(),
      title: 'Qwik',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit t ywetyewtytewytew tr tewrtewrt r',
      imgSrc: `${NatureImg}`,
    },
    {
      id: new Date().valueOf(),
      title: 'Node.JS',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit oqeworiqwoeriqwoeroqiw trqtretertre re',
      imgSrc: `${NatureImg}`,
    },
  ]

  function truncate(str: string, n: number) {
    let shortText = str.length > n ? str.substr(0, n - 1) + '...' : str
    if (shortText.length < n) {
      return str.substr(0, n - 1) + '...'
    }
    return shortText
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
