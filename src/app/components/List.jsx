import React from "react";
import Card from "./Card";

const List = (props) => {
    const { data, addToCart, count } = props

  return (

    <div className="col-sm">
      <div className="row">
        {data.map(item => <Card key={item.ref} item={item} addToCart={addToCart} count={count} />)}
      </div>
    </div>
  );
};

export default List;

