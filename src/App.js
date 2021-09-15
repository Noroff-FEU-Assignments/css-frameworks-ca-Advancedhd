import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalNavbar from "./aGlobalComponents/navbar";
import Footer from "./aGlobalComponents/footer";
import Carousel from "./HomeComponents/carousel/carousel";
import TitleParagraph from "./HomeComponents/TitleParagraph/TitleParagraph";
import Tabs from "./HomeComponents/tabs/tabs";
import "./sass/style.scss";

export default function BasicExample() {
  return (
    <>
      <div className="gradient">
        <div>
          <Router>
            <GlobalNavbar />
            <main>
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
            </main>
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
    <div>
      <h2>About</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
