import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import logo from './../images/cart.ico';

export default function Navbar() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href=''>
            <img
            src= {logo}
            height='30'
            alt=''
            loading='lazy'
            />            
            <div className='mx-3'>
                Virtual Store
            </div>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}