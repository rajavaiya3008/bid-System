import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import SingleBid from "./components/SingleBid";
import { bidData } from "./utils/bidData";

export default function App() {
  const [data, setData] = useState(bidData)

  const handleChange = (e) => {
    console.log('value', e.target.value)
    console.log('e.target.id', e.target.id)
  }

  return (
    <div>
      <div style={{ display: 'flex', overflow: 'hidden' }}>
        <Carousel
          interval={null}
          controls={false}
          indicators={false}
          pause="none"
          style={{ width: '100%' }}
        >
          <Carousel.Item>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              {data.map((bid,i) => 
                {
                  return <SingleBid
                  key={i}
                  style={{
                    flex: '0 0 auto',
                    width: '300px',
                    height: '300px',
                    marginRight: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow:'auto'
                  }}
                  bid={bid}
                  handleChange={handleChange}
                >
                </SingleBid>}
              )}
            </div>
          </Carousel.Item>
          {/* Add more Carousel.Items if needed */}
        </Carousel>
      </div>
    </div>
    // <div style={{ display: "block", width: 700, padding: 30 }}>
    //   <h4>React-Bootstrap Carousel Component</h4>
    //   <Carousel
    //     interval={null}
    //     controls={false}
    //     indicators={false}
    //     pause="none"
    //     style={{width:'200px'}}
    //   >
    //     <Carousel.Item className="active">
    //       <div
    //         className="d-block w-100"
    //         style={{
    //           backgroundColor: "#f8f9fa",
    //           height: "200px",
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <h3>Slide One</h3>
    //       </div>
    //       <Carousel.Caption>
    //         <p className="hello-txt">Hello</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item className="active">
    //       <div
    //         className="d-block w-100"
    //         style={{
    //           backgroundColor: "#f8f9fa",
    //           height: "200px",
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <h3>Slide Two</h3>
    //       </div>
    //       <Carousel.Caption>
    //         <p className="hello-txt">Hello 2</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //   </Carousel>
    // </div>
  );
}
