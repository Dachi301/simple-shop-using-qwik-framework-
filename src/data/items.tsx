interface CardProps {
  id: number
  title: string
  body: string
  imgSrc: string
  price: number
}

const Items: CardProps = [
  {
    id: 1,
    title: 'PS5',
    body: 'Lorem ipsum dolor, sit amet elit asdfasfg',
    imgSrc: '/src/images/ps5.jpg',
    price: 50,
  },
  {
    id: 2,
    title: 'Nike',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit fsgregqer t',
    imgSrc: '/src/images/nike.jpg',
    price: 139,
  },
  {
    id: 3,
    title: 'Nature',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elittr rtq qwrqwer qewr qwewr',
    imgSrc: '/src/images/nature.jpg',
    price: 284,
  },
  {
    id: 4,
    title: 'Ronaldo',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit yyyt5 hnbret asFSDsd asd as',
    imgSrc: '/src/images/goat.jpg',
    price: 7,
  },
  {
    id: 5,
    title: 'Messi',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit yyyt5 hnbret asFSDsd asd as',
    imgSrc: '/src/images/goat.jpg',
    price: 10,
  },
]

export default Items
