import React from "react"
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact"

export const Materialcard = (props) => {
  return (
    <MDBContainer>
      <MDBCard
        className="card-body"
        style={{ width: "auto", marginTop: "1rem" }}
      >
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <MDBCardText>{props.content}</MDBCardText>
      </MDBCard>
    </MDBContainer>
  )
}
