import React, { Fragment } from "react";
import VeggieListEntry from "./VeggieListEntry";

const VeggieList = ({ list, veggies, remove, add }) => (
  <>
    <div className="listContainer">
      {veggies.length ? <h5 className="listHead">{list}</h5> : null}
      <div className="veggieList">
        {veggies.map((veggie, key) => (
          <VeggieListEntry
            list={list}
            veggie={veggie}
            key={key}
            remove={remove}
            add={add}
          />
        ))}
      </div>
    </div>
  </>
);

export default VeggieList;
