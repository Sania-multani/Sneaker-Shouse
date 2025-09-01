import React from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


 const items = [
    {
      title: "Ethical Sneaker",
      subtitle: "Fresh & 100% Organic",
      img: "assets/images/sneak1.jpg", // replace with your image
    },
    {
      title: "Get Clean",
      subtitle: "Step into Sustainability",
      img: "assets/images/sneak2.jpg",
    },
    {
      title: "Stride & Style",
      subtitle: "Where Every Step Speaks Fashion",
      img: "assets/images/sneak3.jpg",
    },
  ];


  const products = [
  {
    id: 1,
    title: "FILLO – XTREMA 3 RETRO",
    price: "Rs.20.00",
    img: "assets/images/sneak15.jpg",
  },
  {
    id: 2,
    title: "NIKA – SPORTA X BROWN",
    price: "Rs.20.00",
    img: "assets/images/sneak17.jpg",
  },
  {
    id: 3,
    title: "NIKA – SKORTA S BLACK",
    price: "Rs.20.00",
    img: "assets/images/sneak18.jpg",
  },
  {
    id: 4,
    title: "FILLO – YEZZO 2X WHITE",
    price: "Rs.20.00",
    img: "assets/images/sneak19.jpg",
  },
    {
    id: 4,
    title: "FILLO – YEZZO 2X WHITE",
    price: "Rs.20.00",
    img: "assets/images/sneak19.jpg",
  },
    {
    id: 4,
    title: "FILLO – YEZZO 2X WHITE",
    price: "Rs.20.00",
    img: "assets/images/sneak15.jpg",
  },
    {
    id: 4,
    title: "FILLO – YEZZO 2X WHITE",
    price: "Rs.20.00",
    img: "assets/images/sneak17.jpg",
  },
    {
    id: 4,
    title: "FILLO – YEZZO 2X WHITE",
    price: "Rs.20.00",
    img: "assets/images/sneak18.jpg",
  },
    {
    id: 4,
    title: "FILLO – YEZZO 2X WHITE",
    price: "Rs.20.00",
    img: "assets/images/sneak19.jpg",
  },
    {
    id: 4,
    title: "FILLO – YEZZO 2X WHITE",
    price: "Rs.20.00",
    img: "assets/images/sneak18.jpg",
  },
    {
    id: 4,
    title: "FILLO – YEZZO 2X WHITE",
    price: "Rs.20.00",
    img: "assets/images/sneak17.jpg",
  },
    {
    id: 4,
    title: "FILLO – YEZZO 2X WHITE",
    price: "Rs.20.00",
    img: "assets/images/sneak15.jpg",
  },
];


const testimonials = [
  {
    name: "Jubin Silva",
    title: "Engineer",
    image: "assets/images/jubin.jpg",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    name: "Alisa Lidia",
    title: "CEO",
    image: "assets/images/alisa.jpg",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    name: "Mark Benson",
    title: "Designer",
    image: "assets/images/mark.jpg",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  // Add more testimonials if needed
];



const blogPosts = [
  {
    title: "NUNC VEL AMET ETIAM ARCU ENIM.",
    date: "February 1, 2022",
    comments: "No Comments",
    content: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum",
    image: "assets/images/sneak24.jpg",
  },
  {
    title: "NUNC VEL AMET ETIAM ARCU ENIM.",
    date: "February 1, 2022",
    comments: "No Comments",
    content: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum",
    image: "assets/images/sneak25.jpg",
  },
  {
    title: "NUNC VEL AMET ETIAM ARCU ENIM.",
    date: "February 1, 2022",
    comments: "No Comments",
    content: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum",
    image: "assets/images/sneak27.jpg",
  }
];



const Home = () => {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };


  return (

    <>
  

    {/* <div>
        <img src="assets/images/sneak1.jpg"   className="cstm-bg-hero-img"></img>
    </div> */}


     {/* <section className="hero-section">
    
      <img
        src="assets/images/sneak1.jpg"
        alt="Sneaker"
        className="cstm-bg-hero-img"
      />

      <div className="hero-content">
        <p className="hero-subtitle">OUTFIT WITH SNEAKER</p>
        <h1 className="hero-title">Bring Your Shoes Back To Life</h1>
        <button className="hero-btn">SEE MORE</button>
      </div>
    </section> */}




     <section className="hero-section">
      {/* Background Image */}
      <img
        src="assets/images/sneak1.jpg"
        alt="Sneaker"
        className="cstm-bg-hero-img"
      />

      {/* Overlay Content */}
      <div className="hero-content animate">
        <p className="hero-subtitle">STEP INTO STYLE</p>
        <h1 className="hero-title">Sneakers That Match Your Every Move</h1>
        <button className="hero-btn">SHOP NOW</button>
      </div>
    </section>



   {/* <div className="">
     <img
        src="assets/images/sneak2.jpg"
        className="img-fluid"
      />

    </div> */}


     {/* <section className="sneaker-hero">
      <img
        src="assets/images/sneak2.jpg"
        alt="Sneaker"
        className="img-fluid  "
      />

    
      <div className="sneaker-overlay">
        <h1 className="sneaker-title">PICK THE PERFECT PAIR</h1>
        <p className="sneaker-subtitle">
          Made from high-quality, breathable leather and mesh, ensuring your feet 
          stay cool and comfortable all day long.
        </p>
        <button className="sneaker-btn">SHOP NOW</button>
      </div>
    </section> */}


    <section className="sneaker-hero">
  {/* Background Image */}
  <img
    src="assets/images/sneak2.jpg"
    alt="Sneaker"
    className="sneaker-bg"
  />

  {/* Overlay Text */}
  <div className="sneaker-overlay">
    <h1 className="sneaker-title">PICK THE PERFECT PAIR</h1>
    <p className="sneaker-subtitle">
      Made from high-quality, breathable leather and mesh, ensuring your feet 
      stay cool and comfortable all day long.
    </p>
    <button className="sneaker-btn">SHOP NOW</button>
  </div>
</section>

   
   <div className="mt-5">
    <p className="  cstm-catg-head text-center">CATEGORY</p>
    </div>


{/* <div className="container-fluid">
<div className="row  mt-5">
    <div className="col-lg-3">
        <img src="assets/images/sneak3.jpg"  className="img-fluid"></img>
        </div>

         <div className="col-lg-3">
        <img src="assets/images/sneak4.jpg"   className="img-fluid"></img>
        </div>

         <div className="col-lg-3">
        <img src="assets/images/sneak5.jpg"   className="img-fluid"></img>
        </div>

         <div className="col-lg-3">
        <img src="assets/images/sneak7.jpg"   className="img-fluid"></img>
        </div>

</div>
</div> */}



<div className="container-fluid mt-5">
  <div className="row">
    {/* Card 1 */}
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="sneaker-card">
        <img src="assets/images/sneak3.jpg" className="img-fluid sneaker-img" alt="Sneaker" />
        <div className="sneaker-overlay-content">
          <h3>Foot Flex</h3>
          <p>Shop Now</p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="sneaker-card">
        <img src="assets/images/sneak4.jpg" className="img-fluid sneaker-img" alt="Sneaker" />
        <div className="sneaker-overlay-content">
          <h3>Urban Walk</h3>
          <p>Shop Now</p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="sneaker-card">
        <img src="assets/images/sneak5.jpg" className="img-fluid sneaker-img" alt="Sneaker" />
        <div className="sneaker-overlay-content">
          <h3>Street Style</h3>
          <p>Shop Now</p>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="sneaker-card">
        <img src="assets/images/sneak7.jpg" className="img-fluid sneaker-img" alt="Sneaker" />
        <div className="sneaker-overlay-content">
          <h3>Daily Comfort</h3>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="container-fluid">
    <div className="row">
        <div className="col-lg-4">
            <div className="img-container">
            <img src="assets/images/sneak8.jpg"  className="img-fluid"></img>
            </div>
            </div>

            <div className="col-lg-4">
                 <div className="img-container">
            <img src="assets/images/sneak9.jpg"   className="img-fluid"></img>
            </div>
            </div>

            <div className="col-lg-4">
                  <div className="img-container">
            <img src="assets/images/sneak10.jpg"   className="img-fluid"></img>
            </div>
            </div>
    </div>
</div>




{/* <div className="mt-5   cstm-parlx-img-sec">
    <img src=" assets/images/sneak14.jpg"   className="img-fluid"></img>
</div> */}



<div className="container-fluid my-5">
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="200">
          <div className="sneaker-card-paralx" style={{ backgroundImage: "url(assets/images/sneak14.jpg)" }}>
            {/* <div className="overlay">
              <h3>Ethical Sneaker</h3>
              <p>Fresh & 100% Organic</p>
              <button className="btn btn-light rounded-pill fw-bold">ALL PRODUCTS</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>


    <div className="container my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">ALL OUR PRODUCT</h2>
        <a href="/" className="see-more-link">
          SEE MORE →
        </a>
      </div>

      {/* Products */}
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-lg-3 col-md-6 col-12 mb-5" key={product.id}>
            <div className="product-card p-3 h-100">
              <img
                src={product.img}
                alt={product.title}
                className="img-fluid product-img "
              />
              <h6 className="fw-bold mt-3">{product.title}</h6>
              <p className="price">{product.price}</p>
              <button className="btn btn-link select-btn">ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
    </div>




 <div className="container-fluid">
      <div className="row">

        <div className="col-lg-3 col-md-6 col-sm-12 showcase-container">
          <div className="image-box zoom-effect">
            <img src="assets/images/sneak20.jpg" className="img-fluid" alt="Ethical Sneaker" />
            <div className="overlayone">
              <h2>Ethical Sneaker</h2>
              <p>Fresh & 100% Organic</p>
              <button className="btn btn-light">All Products</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 showcase-container">
          <div className="image-box zoom-effect">
            <img src="assets/images/sneak21.jpg" className="img-fluid" alt="Get Clean" />
            <div className="overlayone">
              <h2>Get Clean</h2>
              <p>Step into Sustainability</p>
              <button className="btn btn-light">All Products</button>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-sm-12 showcase-container">
          <div className="image-box zoom-effect">
            <img src="assets/images/sneak22.jpg" className="img-fluid" alt="Stride & Style" />
            <div className="overlayone">
              <h2>Stride & Style</h2>
              <p>Where Every Step Speaks Fashion</p>
              <button className="btn btn-light">All Products</button>
            </div>
          </div>
        </div>

      </div>
    </div>


      <div className="testimonial-section container-fluid py-5">
      <h2 className="section-title text-dark mb-4">WHAT OUR CUSTOMERS <br /> SAYING</h2>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card px-3" key={index}>
            <div className="card p-4 rounded shadow-sm h-100">
              <div className="stars mb-3">
                {Array(5).fill().map((_, i) => (
                  <span key={i} className="text-warning">&#9733;</span>
                ))}
              </div>
              <p className="review-text text-muted">{testimonial.review}</p>
              <div className="d-flex align-items-center mt-4">
                <img src="assets/images/sneak23.jpg" alt={testimonial.name} className="rounded-circle me-3 profile-img" />
                <div>
                  <h5 className="mb-0 fw-bold">{testimonial.name}</h5>
                  <small className="text-danger">{testimonial.title}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>


     <div className="container py-5">
      <div className="row">
        {blogPosts.map((post, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="blog-card shadow-sm">
              <img src={post.image} alt="blog" className="img-fluid" />
              <div className="p-3">
                <h5 className="fw-bold">{post.title}</h5>
                <p className="text-muted mb-1">{post.date} <span>{post.comments}</span></p>
                <p className="mb-0">{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  
</>

  );
};

export default Home;
