import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../assets/img1.png'

const Landing = () => {
  return (
    <div style={{ paddingTop: '50px' }}>
      <div style={{ height: '450px', background: '#070b4a', color: 'white' }} className='d-flex px-5'>
        <div className='p-5 m-5 w-50'>
          <h1>Employee Growth & <br /> Development</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias culpa inventore voluptatibus cupiditate velit, eos laudantium dolore repudiandae saepe quia accusantium quibusdam soluta itaque esse! Ab quo dolor ipsam velit.</p>
          <button className='btn btn-primary'><Link style={{textDecoration:'none',color:'white'}} className='fs-5' to={'/home'}>Get Started</Link></button>
        </div>
        <div className='p-5'>
          <img width={'100%'} height={'300px'} src={banner} alt="" />
        </div>
      </div>
      <div className='container'>
        <div className="d-flex">
          <div className='p-5 mx-5 w-50'>
            <h1 className='fw-bold'>Project <br /> Management</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias culpa inventore voluptatibus cupiditate velit, eos laudantium dolore repudiandae saepe quia accusantium quibusdam soluta itaque esse! Ab quo dolor ipsam velit.</p>
            <button className='btn btn-primary rounded'>Explore More</button>
          </div>
          <div className='p-5 mx-5 w-50'>
          <img width={'100%'} height={'300px'} src="https://img.freepik.com/free-vector/portrait-team-happy-professional-employees-cartoon-office-workers-corporate-clothes-group-colleagues-work-together-flat-vector-illustration-career-teamwork-startup-concept_74855-25264.jpg" alt="" />
          </div>
        </div>
        <div className="d-flex">
          <div className='p-5 mx-5 w-50'>
          <img width={'100%'} height={'300px'} src="https://img.freepik.com/premium-vector/illustration-teamwork-business-working-together-team-working-project-illustration-flat-cartoon-style_15602-580.jpg" alt="" />
          </div>
          <div className='p-5 mx-5 w-50'>
            <h1 className='fw-bold'>Work Together</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias culpa inventore voluptatibus cupiditate velit, eos laudantium dolore repudiandae saepe quia accusantium quibusdam soluta itaque esse! Ab quo dolor ipsam velit.</p>
            <button className='btn btn-primary rounded'>Explore More</button>
          </div>
        </div>
        <div className="d-flex">
          <div className='p-5 mx-5 w-50'>
            <h1 className='fw-bold'>Customise it to <br /> your needs</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias culpa inventore voluptatibus cupiditate velit, eos laudantium dolore repudiandae saepe quia accusantium quibusdam soluta itaque esse! Ab quo dolor ipsam velit.</p>
            <button className='btn btn-primary rounded'>Explore More</button>
          </div>
          <div className='p-5 mx-5 w-50'>
          <img width={'100%'} height={'300px'} src="https://rest.techbehemoths.com/storage/images/posts/284/main-how-animation-changed-621e40d18225d.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing