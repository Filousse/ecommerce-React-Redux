import React, { Fragment, useState } from 'react';
import { Navbar, List } from "./components";
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
  const [ category, setCategory ] = useState(0);
  const loadCategory = (i) => {
    setCategory(i)
  }
  const filterResults = (input) => {
    let fullList = list.flat();
    let filtered = fullList.filter(item => {
      const name = item.name.toLowerCase();
      const tern =  input.toLowerCase();  
      return name.indexOf(tern) > -1
    })
    console.log(filtered)
  }
  
  return (
    <Fragment>
      <Navbar filter={filterResults}/>
      <div className="container">
        <div className="row">
          <SideMenu loadCategory={loadCategory}  category={category}/>
          <div className="col-sm">
            <div className="row">
              <List data={list[category]} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default App;
