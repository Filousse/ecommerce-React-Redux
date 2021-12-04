import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import CartPage from "./Cart";
import Home from "./Home"; 
import "../styles/app.css";
import { list } from "../data" 

const SideMenu = ({ loadCategory, category })=> {
  const links = ["Fruits","Légumes","Produits frais","Epicerie","Boissons"];

  return(
    <div className="col-sm-2 sidebar">
      <ul>
        {links.map((link, index)=> {
          return(<li className={category == index && "active" } key={index} onClick={()=>loadCategory(index)}>{link}</li>)
        })}
      </ul>
    </div>
  )
}

const App = () => {
  const [ count, setCount] = useState(0);
  const [ category, setCategory ] = useState(0);
  const [ isFiltering, setFiltering ] = useState(false);
  const [ isFiltered, setFilted ] = useState(false);

  const filterResults = (input) => {
    let fullList = list.flat();
    let results = fullList.filter(item => {
      const name = item.name.toLowerCase();
      const tern =  input.toLowerCase();  
      return name.indexOf(tern) > -1
    })
    setFilted(results)
  } 
  
  return (
    <Fragment>
      <Router>
      <Navbar filter={filterResults} setFiltering={setFiltering} count={count}/>
      {/* routes */}
        <Route exact path="/" component={ () => <Home
                                                  count={count} 
                                                  category={category} 
                                                  loadCategory={(i) => {setCategory(i)}}   
                                                  addToCart={setCount} 
                                                  list={list} 
                                                  isFiltered={isFiltered} 
                                                  isFiltering={isFiltering}
          />}
        />
        <Route path="/cart" component={CartPage}/>
      </Router>
      <Footer/>
    </Fragment>
  );
}
export default App;