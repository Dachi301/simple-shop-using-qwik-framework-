import { component$ } from '@builder.io/qwik'

// Component
import Header from '~/components/header/header'

import Ps5Img from '../../../images/nike.jpg'

export default component$(() => {
  return (
    <div>
      <Header />
      <div class={'px-[30px]'}>
        <div class={'flex gap-[50px]'}>
          <img src={Ps5Img} class={'h-[500px] object-cover'} />
          <div class={'flex flex-col'}>
            <h1 class={'text-[7em]'}>Nike</h1>
            <div class={'pl-[10px]'}>
              <p class={'mb-[20px] text-[22px]'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo unde expedita in quibusdam? Iste at saepe officia
                tempora facilis, fugit dolorum modi repellendus impedit culpa
                eius! A nemo blanditiis ea.
              </p>
              <div class={'flex flex-col gap-[15px]'}>
                <p class={'text-[22px]'}>1149 ₾</p>
                <div class={'flex items-center gap-[20px]'}>
                  <button
                    class={
                      'rounded-[10px] bg-[gray] py-[10px] px-[20px] text-[25px]'
                    }
                  >
                    +
                  </button>
                  <p>1</p>
                  <button
                    class={
                      'rounded-[10px] bg-[gray] py-[10px] px-[20px] text-[25px]'
                    }
                  >
                    -
                  </button>
                </div>
                <div>
                  <button
                    class={
                      'mt-[20px] flex translate-y-0 justify-start rounded-[10px] bg-[#e7c128] py-[20px] px-[20px] text-[20px] transition-all active:translate-y-1'
                    }
                  >
                    დამატება კალათაში
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
