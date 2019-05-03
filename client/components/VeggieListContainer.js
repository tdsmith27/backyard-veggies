import React from "react";
import VeggieList from "./VeggieList";

const lists = ["seasonal", "search", "exclude"];

const VeggieListContainer = props => (
  <div className="lists">
    {lists.map(list => (
      <VeggieList
        list={list}
        veggies={props[list]}
        remove={props.remove}
        add={props.add}
      />
    ))}
  </div>
);

export default VeggieListContainer;
