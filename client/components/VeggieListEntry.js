import React, { Fragment } from "react";

const VeggieListEntry = ({ veggie, remove }) => (
  <div className="veggie">
    <div className="x" onClick={() => remove(veggie)}>
      {" "}
      X{" "}
    </div>
    <div className="v">{veggie} </div>
  </div>
);

export default VeggieListEntry;
