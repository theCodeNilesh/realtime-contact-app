import React, { useContext } from "react";
import usericon from "../usericon.svg";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { ContactContext } from "../context/Context";
import blob1 from "../blob1.svg";
import blob2 from "../blob2.svg";

const ViewContact = () => {
  const { state } = useContext(ContactContext);
  // destructuring contact from the state
  // and rendering it in state
  //FIXME: DONE destructure contact from state
  const { contact } = state;
  return (
    <Container>
      <img src={blob1} alt="blob1" className="cirlce3" />
      <img src={blob2} alt="blob2" className="cirlce4" />
      <img src={blob2} alt="blob2" className="cirlce5" />
      <Row className="mt-2 mb-5">
        <Col md="6" className="offset-md-3">
          <Card
            className="pt-5 pb-4 showcontact"
            style={{ width: "53vh", paddingLeft: "40px", paddingRight: "40px" }}
          >
            <CardBody className="text-center pb-4 ">
              <img
                height="150"
                width="150"
                className=" profile"
                src={contact?.picture ? contact?.picture : usericon}
              />
              <CardTitle className=" mt-4 cardtxt">
                <h1
                  className="cardtxt"
                  style={{
                    fontWeight: "500",
                    fontSize: "32px",
                    textTransform: "capitalize",
                  }}
                >
                  {contact?.name}
                </h1>
              </CardTitle>
              <CardSubtitle className="mt-2">
                <h3
                  className="cardtxt"
                  style={{
                    fontWeight: "500",
                    fontSize: "22px",
                    opacity: "80%",
                  }}
                >
                  <FaPhone className="mr-3" size={18} />
                  {contact?.phoneNumber}
                </h3>
              </CardSubtitle>
              <a
                className="btn  button mt-5 "
                target="_blank"
                href={`mailto:{contact?.email}`}
                style={{
                  padding: "14px",
                  letterSpacing: "1px",
                  marginTop: "20px",
                }}
              >
                <FaEnvelope className="icon mr-3" size={18} />
                {contact?.email}
              </a>

              <a
                className="btn  button mt-4"
                target="_blank"
                //TODO: add google maps
                href={`https://www.google.com/maps/place/${contact?.address}`}
                style={{
                  padding: "14px",
                  letterSpacing: "1px",
                  marginTop: "20px",
                }}
              >
                <FaMapMarkerAlt className="icon mr-2" size={16} />
                {contact?.address}
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewContact;
