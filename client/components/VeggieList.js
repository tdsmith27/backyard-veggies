import React, { Fragment } from "react";
import VeggieListEntry from "./VeggieListEntry";

const VeggieList = ({ veggies }) => (
  <>
    <div className="veggieList">
      {veggies.map((veggie, key) => (
        <VeggieListEntry veggie={veggie} key={key} />
      ))}
    </div>
  </>
);

export default VeggieList;
