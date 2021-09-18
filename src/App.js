import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalNavbar from "./GlobalComponents/navbar";
import Footer from "./GlobalComponents/footer";
import Carousel from "./HomeComponents/carousel/carousel";
import TitleParagraph from "./HomeComponents/TitleParagraph/TitleParagraph";
import Tabs from "./HomeComponents/tabs/tabs";
import Heading from "./News/components/heading";
import Pages from "./News/components/pages";
import ProductCards from "./News/components/productCards";
import ContactForm from "./Contact/components/contactForm";
import "./sass/style.scss";

export default function BasicExample() {
  return (
    <>
      <div className="gradient">
        <div>
          <Router>
            <GlobalNavbar />
            <Switch>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    </>
  );
}

function Home() {
  return (
    <>
      <Carousel />
      <TitleParagraph />
      <Tabs />
    </>
  );
}

function News() {
  return (
    <>
      <Heading />
      <Pages />
      <ProductCards />
      <Pages />
    </>
  );
}

function Contact() {
  return (
    <>
      <ContactForm />
    </>
  );
}
