import React from "react";
import './home.css';
import {
  Footer,
  Possibility,
  Features,
  Whatuniblu,
  Header,
} from "../../container";
import { CTA, Brand, Navbar, Article } from "../../components";
import Blog from '../blog/Blog'
import "./home.css";
import NewContent from "./NewContent";
import Form from "../contactus/form";
const Home = () => {
  return (
    <div>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Whatuniblu />
        <NewContent />
        <Features />
        
       <Form />
       <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
