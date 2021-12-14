import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserProfileContextProvider from "../../lib/UserProfileContext";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import CartPage from "./Cart";
import Home from "./Home";
import Checkout from "./Checkout";
import { Confirm } from "./Confirm";

import "../../styles/app.css";
import { list } from "../../data"



const App = (props) => {
  const { items, saveLocalStorage } = props;
  const [category, setCategory] = useState(0);
  const [isFiltering, setFiltering] = useState(false);
  const [isFiltered, setFilted] = useState(false);
  const filterResults = (input) => {
      let fullList = list.flat();
      let results = fullList.filter(item => {
      const name = item.name.toLowerCase();
      const tern = input.toLowerCase();
      return name.indexOf(tern) > -1
    })
    setFilted(results)
  }

  useEffect(() => {
    saveLocalStorage(items);
  }, [items])

  return (
    <Fragment>
      <Router>
        <UserProfileContextProvider>
          <Navbar filter={filterResults} setFiltering={setFiltering} />
          {/* routes */}
          <Route exact path="/" component={() =>
            <Home
              category={category}
              loadCategory={(i) => {setCategory(i)}}
              list={list}
              isFiltered={isFiltered}
              isFiltering={isFiltering}
            />}
          />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/delivery" component={Confirm} />

        </UserProfileContextProvider>
      </Router>      
      <Footer />
    </Fragment>
  );
}
export default App;
