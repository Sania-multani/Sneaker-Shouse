import React from 'react'


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
    img: "assets/images/sneak15.jpg",
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
    img: "assets/images/sneak15.jpg",
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
    img: "assets/images/sneak15.jpg",
  },

   {
    id: 4,
    title: "FILLO – YEZZO 2X WHITE",
    price: "Rs.20.00",
    img: "assets/images/sneak15.jpg",
  },
];



const Shop = () => {

   const colors = ['#000000', '#0057D9', '#A52A2A', '#FFD2A6', '#808080', '#7AC47F'];
  const num = ['3XL', '4XL', '5XL', 'L', 'M', 'S', 'XL', 'XXL']
  const fabrc = ['Cotton', 'Denim', 'Muslin', 'Stretch ', 'Velvet']


  return (
   <>


   <div className="breadcrumb-container mb-5">
      <div className="breadcrumb-inner">
        <span className="breadcrumb-link">Home</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">Shop</span>
      </div>
    </div>


     {/* Products */}
       <div className='container-fluid'>
      <div className="row g-4">

          <div className='col-lg-3 '>
              <div className='custom-shop-sidebar'>
                <div>
                  <div className='custom-shop-catge'>
                    <p>Shop By Categories</p>
                  </div>
                  <span></span>
                </div>
                <div className='custom-bord'></div>
                <div className='custom-chec-inpu'>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>Our Store&nbsp;(20)</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'> Accessories&nbsp;(12)</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>Fashion & Style&nbsp;(13)</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>Infants&nbsp;(10)</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>Sports Wear&nbsp;(10)</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>Travelling&nbsp;(20)</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>Watches&nbsp;(20)</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>Western Wear&nbsp;(20)</label>
                  </div>
                </div>
              </div>

              <div className='custom-shop-sidebar mt-4'>
                <div>
                  <div className='custom-shop-catge'>
                    <p>Brands</p>
                  </div>
                  <span></span>
                </div>
                <div className='custom-bord'></div>
                <div className='custom-chec-inpu'>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>Creative&nbsp;(20)</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'> Design&nbsp;(12)</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>Gallery&nbsp;(13)</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>Golden&nbsp;(10)</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>Highlight&nbsp;(10)</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>Modern&nbsp;(20)</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>Nature&nbsp;(20)</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>Sparker&nbsp;(20)</label>
                  </div>
                </div>
              </div>

              <div className='custom-shop-sidebar mt-4'>
                <div>
                  <div className='custom-shop-catge'>
                    <p>Highlight</p>
                  </div>
                  <span></span>
                </div>
                <div className='custom-bord'></div>
                <div className='custom-chec-inpu'>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>All Products</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'> Best Seller</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>New Arrivals</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>Sale</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>Hot Items</label>
                  </div>
                </div>
              </div>


              <div className='custom-shop-sidebar mt-4'>
                <div>
                  <div className='custom-shop-catge'>
                    <p>Filter By Color</p>
                  </div>
                  <span></span>
                </div>
                <div className='custom-bord'></div>
                <div className='custom-check-inpu'>
                  <div className="circle-container">
                    {colors.map((color, index) => (
                      <div
                        key={index}
                        className="color-circle"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>


              <div className='custom-shop-sidebar mt-4'>
                <div>
                  <div className='custom-shop-catge'>
                    <p>Filter By Size</p>
                  </div>
                  <span></span>
                </div>
                <div className='custom-bord'></div>
                <div className='custom-check-inpu'>
                  <div className="circle-container">
                    {num.map((nu, indx) => (
                      <div>
                        <div
                          key={indx}
                          className="custom-filter-size">
                          <p className='custom-size'>{nu}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>




              <div className='custom-shop-sidebar mt-4'>
                <div>
                  <div className='custom-shop-catge'>
                    <p>Filter By Fabric</p>
                  </div>
                  <span></span>
                </div>
                <div className='custom-bord'></div>
                <div className='custom-check-inpu'>
                  <div className="circle-container">
                    {fabrc.map((nu, indx) => (
                      <div>
                        <div
                          key={indx}
                          className="custom-filter-fabrc">
                          <p className='custom-size'>{nu}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>


              <div className='custom-shop-sidebar mt-5'>
                <div>
                  <div className='custom-shop-catge'>
                    <p>Price Filter</p>
                  </div>
                  <span></span>
                </div>
                <div className='custom-bord'></div>
                <div className='custom-chec-inpu'>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>All</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'> 0-100</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>100-200</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>200-300</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>300-400</label>
                  </div>
                  <div className='checkbox-item'>
                    <input type="checkbox"></input>
                    <label className='ms-2  custom-text-inpt'>400-500</label>
                  </div>
                </div>
              </div>

            </div>

       <div  className='col-lg-9'>
        <div className='row'>
        {products.map((product) => (
          <div className="col-lg-4 col-md-6 col-12 mb-5" key={product.id}>
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
      </div>
   </div>
   </>
  )
}

export default Shop