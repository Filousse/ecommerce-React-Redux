import React from "react";
import Card from "./Card";

const List = (props) => {
    const { data } = props

  return (

    <div className="col-sm">
      <div className="row">
        {data.map(item => <Card key={item.ref} item={item}  />)}
      </div>
    </div>
  );
};

export default List;

