import React, { Fragment } from "react";

const VeggieList = ({ veggies }) => (
  <>
    <ul>
      {veggies.map((veggie, key) => (
        <li key={key}>{veggie}</li>
      ))}
    </ul>
  </>
);

export default VeggieList;
