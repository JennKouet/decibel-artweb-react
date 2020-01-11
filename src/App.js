import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/Pages/HomePage";
import CreationPage from "./components/Pages/CreationPage";
import ContactPage from "./components/Pages/ContactPage";
import './App.scss';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/contact" component={ContactPage} />
          <Route path="/creations" component={CreationPage} />
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
