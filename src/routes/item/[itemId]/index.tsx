import { component$ } from '@builder.io/qwik'
import Header from '~/components/header/header'

export default component$(() => {
  return (
    <div>
      <Header />
      <div class={'px-[30px]'}>
        <p>Item PAGEEEEE</p>
      </div>
    </div>
  )
})
