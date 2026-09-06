import { useState } from 'react'

const filters = ['All', 'Pizza', 'Burger', 'Drinks', 'Sandwich']

const foodItems = [
  { name: 'Fried Chicken Unlimited', category: 'Chicken', price: '$49.00', oldPrice: '$69.00', discount: '-15%', img: '/assets/images/food-menu-1.png', alt: 'Fried Chicken Unlimited' },
  { name: 'Burger King Whopper', category: 'Noddles', price: '$29.00', oldPrice: '$39.00', discount: '-10%', img: '/assets/images/food-menu-2.png', alt: 'Burger King Whopper' },
  { name: 'White Castle Pizzas', category: 'Pizzas', price: '$49.00', oldPrice: '$69.00', discount: '-25%', img: '/assets/images/food-menu-3.png', alt: 'White Castle Pizzas' },
  { name: 'Bell Burrito Supreme', category: 'Burrito', price: '$59.00', oldPrice: '$69.00', discount: '-20%', img: '/assets/images/food-menu-4.png', alt: 'Bell Burrito Supreme' },
  { name: 'Kung Pao Chicken BBQ', category: 'Nuggets', price: '$49.00', oldPrice: '$69.00', discount: '-5%', img: '/assets/images/food-menu-5.png', alt: 'Kung Pao Chicken BBQ' },
  { name: "Wendy's Chicken", category: 'Chicken', price: '$49.00', oldPrice: '$69.00', discount: '-15%', img: '/assets/images/food-menu-6.png', alt: "Wendy's Chicken" },
]

function StarRating() {
  return (
    <div className="rating-wrapper">
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
    </div>
  )
}

export default function FoodMenu() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <section className="section food-menu" id="food-menu">
      <div className="container">

        <p className="section-subtitle">Popular Dishes</p>

        <h2 className="h2 section-title">
          Our Delicious <span className="span">Foods</span>
        </h2>

        <p className="section-text">
          Food is any substance consumed to provide nutritional support for an organism.
        </p>

        <ul className="fiter-list">
          {filters.map(filter => (
            <li key={filter}>
              <button
                className={`filter-btn${activeFilter === filter ? ' active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>

        <ul className="food-menu-list">
          {foodItems.map((item, index) => (
            <li key={index}>
              <div className="food-menu-card">

                <div className="card-banner">
                  <img src={item.img} width="300" height="300" loading="lazy"
                    alt={item.alt} className="w-100" />

                  <div className="badge">{item.discount}</div>

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">{item.category}</p>
                  <StarRating />
                </div>

                <h3 className="h3 card-title">{item.name}</h3>

                <div className="price-wrapper">
                  <p className="price-text">Price:</p>
                  <data className="price">{item.price}</data>
                  <del className="del">{item.oldPrice}</del>
                </div>

              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
