import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar className="position-fixed w-100" style={{background:'#070b4a'}}>
            <Container>
                <Navbar.Brand href="#home">
                    <Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }} to={'/'}>
                        <i class="fa-solid fa-users fs-4"></i>
                        <span className='ms-3'>Employee Portal</span>
                    </Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header