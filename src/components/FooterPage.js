import React from "react"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"
import {
  IISCastelli,
  Spaggiari,
  GitHub,
  VSCodium,
  Bootstrap,
  Reactlink,
} from "./Links"

export const FooterPage = () => {
  return (
    <MDBFooter
      color="mdb-color stylish-color page-footer"
      className="font-small pt-4 mt-4 footer"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol ml="3">
            <h5 className="title text-left">Useful Links</h5>
            <ul>
              <li className="list-unstyled text-left">
                <a href={IISCastelli}>I.I.S Castelli</a>
              </li>
              <li className="list-unstyled text-left">
                <a href={Spaggiari}>Spaggiari</a>
              </li>
              <li className="list-unstyled text-left">
                <a href={GitHub}>Personal GitHub</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol ml="3">
            <h5 className="title text-left">Tools I used</h5>
            <ul>
              <li className="list-unstyled text-left">
                <a href={Reactlink}>ReactJS</a>
              </li>
              <li className="list-unstyled text-left">
                <a href={Bootstrap}>Bootstrap</a>
              </li>
              <li className="list-unstyled text-left">
                <a href={VSCodium}>VSCodium</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-1">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.potafi.ga/about"> potafi.ga </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}
