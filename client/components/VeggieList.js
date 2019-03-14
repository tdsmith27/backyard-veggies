import React, { Fragment } from "react";
import VeggieListEntry from "./VeggieListEntry";

const VeggieList = ({ veggies, remove }) => (
  <>
    {veggies.length ? <h4>These foods are in season</h4> : null}
    <div className="veggieList">
      {veggies.map((veggie, key) => (
        <VeggieListEntry veggie={veggie} key={key} remove={remove} />
      ))}
    </div>
  </>
);

export default VeggieList;
