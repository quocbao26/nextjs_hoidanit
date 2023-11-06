'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link'

const AppHeader = () => {
return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand  className='navbar-brand'>
            <Link href={"/"}  className='nav-link'>  
                Home
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link href={"/blogs"} className='nav-link'>
                    Blogs
                </Link>
                {/* <Link href={"/tiktok"} className='nav-link'>
                    Tiktok
                </Link>
                <Link href={"/youtube"} className='nav-link'>
                    Youtube
                </Link>
                <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    
);
}

export default AppHeader;
