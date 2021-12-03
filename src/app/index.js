import React, { Fragment, useState } from 'react';
import Navbar from "./components/NavBar";
import List from "./components/List";
import Footer from "./components/Footer"

import "./styles/app.css";
import { list } from "./data" 

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
    <>
    <Fragment>
      <Navbar filter={filterResults} setFiltering={setFiltering} count={count}/>
      <div className="container">
        <div className="row">
          <SideMenu loadCategory={(i)=>setCategory(i)}  category={category}/>
          <div className="col-sm">
            <div className="row">
              <List data={isFiltering ? isFiltered : list[category]} addToCart={setCount} count={count} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    <Footer/>
    </>
  );
}
export default App;
