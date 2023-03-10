interface CardProps {
  id: number
  title: string
  imgSrc: string
  price: number
}

const Items: CardProps = [
  {
    id: 1,
    title: 'PS5',
    imgSrc: '/src/images/ps5.jpg',
    price: 50,
  },
  {
    id: 2,
    title: 'Nike',
    imgSrc: '/src/images/nike.jpg',
    price: 139,
  },
  {
    id: 3,
    title: 'Nature',
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
    imgSrc: '/src/images/goat.jpg',
    price: 10,
  },
]

export default Items
