const blogPosts = [
  {
    img: '/assets/images/blog-1.jpg',
    alt: 'What Do You Think About Cheese Pizza Recipes?',
    badge: 'Pizza',
    date: 'Jan 01 2022',
    author: 'Jonathan Smith',
    title: 'What Do You Think About Cheese Pizza Recipes?',
    text: 'Financial experts support or help you to to find out which way you can raise your funds more...'
  },
  {
    img: '/assets/images/blog-2.jpg',
    alt: 'Making Chicken Strips With New Delicious Ingridents.',
    badge: 'Burger',
    date: 'Jan 01 2022',
    author: 'Jonathan Smith',
    title: 'Making Chicken Strips With New Delicious Ingridents.',
    text: 'Financial experts support or help you to to find out which way you can raise your funds more...'
  },
  {
    img: '/assets/images/blog-3.jpg',
    alt: 'Innovative Hot Chessyraw Pasta Make Creator Fact.',
    badge: 'Chicken',
    date: 'Jan 01 2022',
    author: 'Jonathan Smith',
    title: 'Innovative Hot Chessyraw Pasta Make Creator Fact.',
    text: 'Financial experts support or help you to to find out which way you can raise your funds more...'
  }
]

export default function Blog() {
  return (
    <section className="section section-divider white blog" id="blog">
      <div className="container">

        <p className="section-subtitle">Latest Blog Posts</p>

        <h2 className="h2 section-title">
          This Is All About <span className="span">Foods</span>
        </h2>

        <p className="section-text">
          Food is any substance consumed to provide nutritional support for an organism.
        </p>

        <ul className="blog-list">
          {blogPosts.map((post, index) => (
            <li key={index}>
              <div className="blog-card">

                <div className="card-banner">
                  <img src={post.img} width="600" height="390" loading="lazy"
                    alt={post.alt} className="w-100" />

                  <div className="badge">{post.badge}</div>
                </div>

                <div className="card-content">

                  <div className="card-meta-wrapper">

                    <a href="#" className="card-meta-link">
                      <ion-icon name="calendar-outline"></ion-icon>
                      <time className="meta-info" dateTime="2022-01-01">{post.date}</time>
                    </a>

                    <a href="#" className="card-meta-link">
                      <ion-icon name="person-outline"></ion-icon>
                      <p className="meta-info">{post.author}</p>
                    </a>

                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">{post.title}</a>
                  </h3>

                  <p className="card-text">{post.text}</p>

                  <a href="#" className="btn-link">
                    <span>Read More</span>
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
