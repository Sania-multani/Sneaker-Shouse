import React from 'react'
import { FaGem } from 'react-icons/fa';
import { GiHerbsBundle } from 'react-icons/gi';
import { FaRoute } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <div className='cstm-about-bg-parlx'>
        <div className='cstm-about-text-img'>
            <p className='cstm-about-text'>About Us</p>
        </div>
      </div>

      <div  className='container mt-5'>
        <div className='row'>
            <div className='col-lg-6'>
             <p  className='cstm-about-our'>Our Story </p>
             <p>Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
             <div className='col-lg-6'>
              <img src="assets/images/sneak30.png" className='img-fluid'></img>
            </div>
            </div>
      </div>



       <div  className='container  mt-5 mb-5'>
        <div className='row'>
            <div className='col-lg-6'>
                <img src="assets/images/sneak31.png" className='img-fluid'></img>
            </div>
             <div className='col-lg-6'>
        
                 <p  className='cstm-about-our'>Who We Are ? </p>
             <p>Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            </div>
      </div>


      {/* <div  className='cstm-about-parlx-to'>

      </div> */}

       <div className="cstm-about-parlx-to mb-5">
      <div className="parallax-overlay">
        <div className="parallax-content">
          <div className="parallax-box">
            <FaGem className="parallax-icon" />
            <h3>Design</h3>
            <div className="divider" />
            <p>
              Praesent metus tellus, elementum eu, semper Vestibulum
              volutpat pretium libero
            </p>
          </div>
          <div className="parallax-box">
            <GiHerbsBundle className="parallax-icon" />
            <h3>Innovation</h3>
            <div className="divider" />
            <p>
              Praesent metus tellus, elementum eu, semper Vestibulum
              volutpat pretium libero
            </p>
          </div>
          <div className="parallax-box">
            <FaRoute className="parallax-icon" />
            <h3>Journey</h3>
            <div className="divider" />
            <p>
              Praesent metus tellus, elementum eu, semper Vestibulum
              volutpat pretium libero
            </p>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default About