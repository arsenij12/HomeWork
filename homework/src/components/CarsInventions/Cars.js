import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Cars.css';

function Cars() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>History of Automobile Invention</h1>
        <Link to="/" className="btn btn-primary">Home</Link>
      </header>
      <Container>
        <Row>
          <Col>
            <Card className="CustomCard">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlRDcGSscyOaFn-Ubezfk4-gdK1cdFuxKx0a30ErwkQ&s" />
              <Card.Body>
                <Card.Title className="CustomTitle">History of Invention</Card.Title>
                <Card.Text className="CustomText">
                  The automobile is not just a means of transportation, but the result of years of technological development.
                  The first automobiles appeared in the late 19th century and revolutionized the world of transportation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="CustomCard">
              <Card.Img variant="top" src="https://i.pinimg.com/564x/e8/39/89/e8398918b8486a8a3af0bb5bd7e42aa8.jpg" />
              <Card.Body>
                <Card.Title className="CustomTitle">Evolution of Automobiles</Card.Title>
                <Card.Text className="CustomText">
                  Over time, automobiles have become faster, more comfortable, and safer thanks to constant innovations
                  in engineering and design.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="CustomCard">
              <Card.Img variant="top" src="https://i.pinimg.com/564x/26/2f/b4/262fb420b45ff36b20b349950b9ad65d.jpg" />
              <Card.Body>
                <Card.Title className="CustomTitle">First Automobiles</Card.Title>
                <Card.Text className="CustomText">
                  In 1885, Karl Benz created the first automobile with an internal combustion engine, the Benz Patent-Motorwagen.
                  This moment is considered the birth of the automotive industry.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="CustomCard">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknK9aOUrFEUU_QPKwJ7IZusH56jpa3tm8C-X9xPrEnQ&s" />
              <Card.Body>
                <Card.Title className="CustomTitle">Safety Innovations</Card.Title>
                <Card.Text className="CustomText">
                  In 1959, Volvo introduced the three-point safety belt, which became one of the most important
                  inventions for improving safety in automobiles.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="CustomCard">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4hl-W0s3o580lWtGjKMcSyXUI2lD7zNZ9cyXpg7mp3g&s" />
              <Card.Body>
                <Card.Title className="CustomTitle">Electric Vehicles</Card.Title>
                <Card.Text className="CustomText">
                  With the advancement of technology, electric vehicles are becoming increasingly popular. They are environmentally friendly, quiet, and have low operating costs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="CustomCard">
              <Card.Img variant="top" src="https://i.pinimg.com/564x/42/82/37/428237ad7f8581c887d716f82706c4f7.jpg" />
              <Card.Body>
                <Card.Title className="CustomTitle">Autopilot</Card.Title>
                <Card.Text className="CustomText">
                  Autopilot technology allows the vehicle to drive itself on the road. This significantly improves safety and driving comfort.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="CustomCard">
              <Card.Img variant="top" src="https://i.pinimg.com/564x/f5/2b/5c/f52b5c8218349aa6c20acb893bba1e71.jpg" />
              <Card.Body>
                <Card.Title className="CustomTitle">Internet Connectivity</Card.Title>
                <Card.Text className="CustomText">
                  Modern automobiles are equipped with internet connectivity systems, allowing them to receive real-time information about road conditions and traffic jams.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="CustomCard">
              <Card.Img variant="top" src="https://i.pinimg.com/564x/fa/d6/fa/fad6fa06d683fb5f2656419fbc589be8.jpg" />
              <Card.Body>
                <Card.Title className="CustomTitle">Eco-Friendly Systems</Card.Title>
                <Card.Text className="CustomText">
                  Many automobiles are now equipped with eco-friendly systems that reduce emissions and save fuel, such as engine start-stop systems.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cars;
