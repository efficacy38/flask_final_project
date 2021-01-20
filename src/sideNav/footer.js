import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="stylish-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Using resource</h5>
            <p>
              <MDBRow>
                <MDBCol>
                  <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik
                    </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                  </div>
                </MDBCol>
              </MDBRow>
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://bootstrapious.com/p/bootstrap-sidebar"> bootstrapious.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;