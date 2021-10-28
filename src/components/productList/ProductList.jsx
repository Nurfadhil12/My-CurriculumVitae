import "./productList.css";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import One from "../../img/one.png";
import Two from "../../img/two.png";
import Three from "../../img/three.png";


const ProductList = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Portofolio</h1>
        <p className="pl-desc">
        this is my work in making a website, I made it using bootstrap framework, reactjs and angularjs        </p>
      </div>
      {/* <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div> */}
      <CardGroup>
        <Card >
          <Card.Img variant="top" src={One} />
          <Card.Body style={{backgroundColor: darkMode && "#333"}}>
            <Card.Title>Web Furniture</Card.Title>
            <Card.Text>
              This is the first view of the web furniture that I made, I took the design from dribble.
            </Card.Text>
            <a href="https://programmergabuttt.000webhostapp.com/">
            <Button variant="success">Click Here</Button>
            </a>
          </Card.Body>
        </Card>
        <Card >
          <Card.Img variant="top" src={Two} />
          <Card.Body style={{backgroundColor: darkMode && "#333"}}>
            <Card.Title>Web Food</Card.Title>
            <Card.Text>
            This is the main view of the Web Food where there are many animations that beautify a display.
            </Card.Text>
            <a href="https://nurfadhil12.github.io/web-foodd/Index.html#">
              <Button variant="success">Click Here</Button>
            </a>            
          </Card.Body>
        </Card>
        <Card >
          <Card.Img variant="top" src={Three} />
          <Card.Body style={{backgroundColor: darkMode && "#333"}}>
            <Card.Title>Web Crypto</Card.Title>
            <Card.Text>
            This is the main view of a crypto platform where there are many graphs of a crypt.
            </Card.Text>
            <a href="https://nurfadhil12.github.io/Webcryptoon/Index.html#">
              <Button variant="success">Click Here</Button>
            </a>            
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body style={{backgroundColor: darkMode && "#333"}}>
            <Card.Title>Coming Soon</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="success">Coming Soon</Button>
          </Card.Body>
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body style={{backgroundColor: darkMode && "#333"}}>
            <Card.Title>Coming Soon</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="success">Coming Soon</Button>
          </Card.Body>
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body style={{backgroundColor: darkMode && "#333"}}>
            <Card.Title>Coming Soon</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="success">Coming Soon</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default ProductList;
