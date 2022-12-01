import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./../styles/Item.css";

function Item(props) {
  return (
    <MDBContainer fluid>
      <MDBRow className="justify-content-center my-3">
        <MDBCol md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src="https://www.navigation.com/static/WFS/Shop-CitroenEMEA-Site/-/Shop-CitroenEMEA/en_GB/Product%20Not%20Found.png"
                      fluid
                      className="img-thumbnail  w-100 h-100" 
                      style={{
                        background: "lightgray",
                        borderWidth: 5,
                      }}
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>

                {/* Product Details */}
                
                
                <MDBCol md="6">
                    {/* Name */}
                    <h5>{props.name}</h5>

                    {/* Description */}
                    <p className=" mb-4 mb-md-0">
                        {props.description}
                    </p>
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">

                    {/* Price */}
                    <h4 className="mb-1 me-1">{props.price}</h4>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="primary" size="lg">
                      Add to cart
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Item;