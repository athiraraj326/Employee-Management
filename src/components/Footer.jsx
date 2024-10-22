import React from 'react'

const Footer = () => {
  return (
    <div style={{ height: '350px',marginTop:'100px',color:'white',background:'#070b4a' }} className='w-100 p-5'>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column mt-3">
          <div className='d-flex align-items-center mt-2 mb-3'>
            <i class="fa-solid fa-users fs-4"></i>
            <h5 style={{fontWeight:'600'}} className='ms-2'>Employee Portal</h5>
          </div>
          <p>Designed and built with all the love in the world by <br /> the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        <div className="d-flex flex-column mt-3">
          <h5 style={{fontWeight:'600'}} className='mb-3'>Links</h5>
          <div className='d-flex flex-column'>
            <a href="" style={{ textDecoration:'none', color: 'white'}}>Landing Page</a>
            <a href="" style={{ textDecoration:'none', color: 'white'}}>Home Page</a>
            <a href="" style={{ textDecoration:'none', color: 'white'}}>Watch History Page</a>
          </div>
        </div>
        <div className="d-flex flex-column mt-3">
          <h5 style={{fontWeight:'600'}} className='mb-3'>Guides</h5>
          <div className='d-flex flex-column'>
            <a href="" style={{ textDecoration:'none', color: 'white'}}>React</a>
            <a href="" style={{ textDecoration:'none', color: 'white'}}>React Bootstrap</a>
            <a href="" style={{ textDecoration:'none', color: 'white'}}>React Router</a>
          </div>
        </div>
        <div className="d-flex flex-column mt-3">
          <h5 style={{fontWeight:'600'}}>Contact Us</h5>
          <div className="d-flex my-3">
            <input type="text" className='form-control' placeholder='Enter your email here' />
            <button className='btn btn-warning ms-2'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="icons d-flex justify-content-between mt-2">
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-twitter"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-instagram"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-facebook"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-github"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright &copy; June 2024, Media Player. Built with React</p>
    </div>
  )
}

export default Footer