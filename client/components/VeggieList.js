import React from "react";
import VeggieListEntry from "./VeggieListEntry";

const VeggieList = ({ list, veggies, remove, add }) => (
  <>
    <div className="listContainer">
      {veggies.length ? <p className="listHead">{list}</p> : null}
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
