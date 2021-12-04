import React from 'react';
import List from "../components/List";

const SideMenu = ({ loadCategory, category }) => {
    const links = ["Fruits", "Légumes", "Produits frais", "Epicerie", "Boissons"];

    return (
        <div className="col-sm-2 sidebar">
            <ul>
                {links.map((link, index) => {
                    return (<li className={category == index && "active"} key={index} onClick={() => loadCategory(index)}>{link}</li>)
                })}
            </ul>
        </div>
    )
}

const Home = (props) => {
    const {count, category, loadCategory, addToCart, list, isFiltered, isFiltering} = props
    return (
        <div className="container">
            <div className="row">
                <SideMenu loadCategory={loadCategory} category={category} />
                <div className="col-sm">
                    <div className="row">
                        <List data={isFiltering ? isFiltered : list[category]} addToCart={addToCart} count={count} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;