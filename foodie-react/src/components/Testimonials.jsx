const testimonials = [
  {
    name: 'Robert William',
    title: 'CEO Kingfisher',
    text: '"I would be lost without restaurant. I would like to personally thank you for your outstanding product."',
    avatar: '/assets/images/avatar-1.jpg'
  },
  {
    name: 'Thomas Josef',
    title: 'CEO Getforce',
    text: '"I would be lost without restaurant. I would like to personally thank you for your outstanding product."',
    avatar: '/assets/images/avatar-2.jpg'
  },
  {
    name: 'Charles Richard',
    title: 'CEO Angela',
    text: '"I would be lost without restaurant. I would like to personally thank you for your outstanding product."',
    avatar: '/assets/images/avatar-3.jpg'
  }
]

export default function Testimonials() {
  return (
    <section className="section section-divider white testi">
      <div className="container">

        <p className="section-subtitle">Testimonials</p>

        <h2 className="h2 section-title">
          Our Customers <span className="span">Reviews</span>
        </h2>

        <p className="section-text">
          Food is any substance consumed to provide nutritional
          support for an organism.
        </p>

        <ul className="testi-list has-scrollbar">
          {testimonials.map((item, index) => (
            <li key={index} className="testi-item">
              <div className="testi-card">

                <div className="profile-wrapper">

                  <figure className="avatar">
                    <img src={item.avatar} width="80" height="80" loading="lazy" alt={item.name} />
                  </figure>

                  <div>
                    <h3 className="h4 testi-name">{item.name}</h3>
                    <p className="testi-title">{item.title}</p>
                  </div>

                </div>

                <blockquote className="testi-text">
                  {item.text}
                </blockquote>

                <div className="rating-wrapper">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>

              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
