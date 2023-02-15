import { $, component$ } from '@builder.io/qwik'
import Card from '~/components/cards/card'
import { Button } from '~/components/button'

import Items from '~/data/items'
import { useNavigate, Link } from '@builder.io/qwik-city'

export default component$(() => {
  const nav = useNavigate()

  const handleRedirect$ = $((item: any) => {
    nav.path = `/item/${item.id}`
  })

  return (
    <div class={'w-full'}>
      <div class={'relative flex h-full flex-col'}>
        <div class={'relative mb-[50px] mt-[50px] px-[30px]'}>
          <h1 class={'mb-[20px] text-center text-[26px]'}>პროფილის დეტალები</h1>
          <p class={'mb-[10px] text-[26px]'}>ჩემი ტოკენი: token</p>
          <p class={'mb-[10px] text-[26px]'}>ბალანსი: x</p>
          <p class={'mb-[20px] text-center text-[26px]'}>ჩემი შენაძენები: </p>
          <div class={'grid grid-cols-4 gap-x-[30px] gap-y-[30px]'}>
            {Array.isArray(Items) &&
              Items.map((item: any) => (
                <Card
                  title={item.title}
                  imgSrc={`${item.imgSrc}`}
                  price={item.price}
                >
                  <Link
                    class='flex w-full items-center justify-center text-xl text-blue-600  hover:text-blue-800'
                    href={`/item/${item.id}`}
                  >
                    <Button action$={() => handleRedirect$(item)} />
                  </Link>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
})
