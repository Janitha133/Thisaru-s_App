import { Col, Row } from "antd";
import React from "react";
import Navbar from "../components/Navbar";
import '../App.css';

const DetailLayout = (Children: any) => {
  return class extends React.Component {
    constructor(props: any) {
      super(props);
      this.state = {};
    }

    render() {
      //   var tokenObject = localStorage.getItem('loginToken')
      const { ...props } = this.props;
      //   if (!!tokenObject) {
      //     history.push('/dashboard')
      //   }
      return (
        <div >
          <div>
            <Navbar />
            <div >
              <Row>
                  <Col md={{ span: 12 }} xs={{ span: 12 }}>
                    <Children {...props} />
                  </Col>
                  <Col className='services' md={{ span: 12 }} xs={{ span: 12 }}>
                    Image
                  </Col>
              </Row>
            </div>
          </div>
        </div>
      );
    }
  };
};

export default DetailLayout;