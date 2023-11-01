const data = [
  {
    id: '1',
    title: 'Tiramisu',
    description: 'The Best Tiramisu in Town',
    image: 'https://picsum.photos/200/300/?random',
    price: '$5.00'
  },
  {
    id: '2',
    title: 'Lemon Ice Cream',
    description: 'Mind Blowing Test',
    image: 'https://picsum.photos/200/300/?random',
    price: '$4.50'
  },
  {
    id: '3',
    title: 'Chocolate Mousse',
    description: 'Unexplored Flavour',
    image: 'https://picsum.photos/200/300/?random',
    price: '$6.00'
  }
];

/* const topDesserts = data.map(dessert => {
  return {
    content: `${dessert.title} - ${dessert.description}`,
    price: dessert.price
  }
}); */

export default function App() {
  const listItems = data.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}`;

    return <li>{itemText}</li>
  })

  return (
    <div>
      <ul>{listItems}</ul>
    </div>)
}