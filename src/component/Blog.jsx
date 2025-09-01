import React from 'react'

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
  },
  {
    title: "NUNC VEL AMET ETIAM ARCU ENIM.",
    date: "February 1, 2022",
    comments: "No Comments",
    content: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum",
    image: "assets/images/sneak27.jpg",
  },
  {
    title: "NUNC VEL AMET ETIAM ARCU ENIM.",
    date: "February 1, 2022",
    comments: "No Comments",
    content: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum",
    image: "assets/images/sneak27.jpg",
  },
  {
    title: "NUNC VEL AMET ETIAM ARCU ENIM.",
    date: "February 1, 2022",
    comments: "No Comments",
    content: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum",
    image: "assets/images/sneak27.jpg",
  }

];


const Blog = () => {


  return (
    <>
    
             <div className='cstm-about-bg-parlx'>
        <div className='cstm-blog-text-img'>
            <p className='cstm-about-text'>Blog</p>
        </div>
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
  )
}

export default Blog