import React, { Fragment } from "react";

const VeggieListEntry = ({ list, veggie, remove, add }) => (
  <div className="veggie">
    {list === "seasonal" ? (
      <div className="o" onClick={() => add(veggie, list)}>
        {" "}
        O{" "}
      </div>
    ) : null}
    <div className="x" onClick={() => remove(veggie, list)}>
      {" "}
      X{" "}
    </div>
    <div className="v">{veggie} </div>
  </div>
);

export default VeggieListEntry;
