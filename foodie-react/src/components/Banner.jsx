const banners = [
  { className: 'banner-lg', img: '/assets/images/banner-1.jpg', alt: 'Discount For Delicious Tasty Burgers!', subtitle: '50% Off Now!', title: 'Discount For Delicious Tasty Burgers!', text: 'Sale off 50% only this week' },
  { className: 'banner-sm', img: '/assets/images/banner-2.jpg', alt: 'Delicious Pizza', title: 'Delicious Pizza', text: '50% off Now' },
  { className: 'banner-sm', img: '/assets/images/banner-3.jpg', alt: 'American Burgers', title: 'American Burgers', text: '50% off Now' },
  { className: 'banner-md', img: '/assets/images/banner-4.jpg', alt: 'Tasty Buzzed Pizza', title: 'Tasty Buzzed Pizza', text: 'Sale off 50% only this week' },
]

export default function Banner() {
  return (
    <section className="section section-divider gray banner">
      <div className="container">
        <ul className="banner-list">
          {banners.map((item, index) => (
            <li key={index} className={`banner-item ${item.className}`}>
              <div className="banner-card">
                <img src={item.img} width="550" height="450" loading="lazy"
                  alt={item.alt} className="banner-img" />

                <div className="banner-item-content">
                  {item.subtitle && <p className="banner-subtitle">{item.subtitle}</p>}
                  <h3 className="banner-title">{item.title}</h3>
                  <p className="banner-text">{item.text}</p>
                  <button className="btn">Order Now</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
