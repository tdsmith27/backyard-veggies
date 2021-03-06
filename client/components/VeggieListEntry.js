import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Check, Close } from "@material-ui/icons";

const checkStyle = {
  color: "#2d9231",
  fontSize: "20px",
  paddingBottom: "5px"
};

const closeStyle = {
  fontSize: "20px"
};

const buttonStyle = {
  width: "40px",
  height: "40px"
};

const VeggieListEntry = ({ list, veggie, editList }) => (
  <div className="veggie">
    {list === "seasonal" ? (
      <IconButton
        style={buttonStyle}
        onClick={() => editList("search", veggie, true)}>
        <Check style={checkStyle} color={"primary"} />
      </IconButton>
    ) : null}
    <IconButton
      style={buttonStyle}
      onClick={() => {
        list === "seasonal"
          ? editList("exclude", veggie, true)
          : editList(list, veggie, false);
      }}>
      <Close style={closeStyle} color={"secondary"} />
    </IconButton>
    <div className="v">{veggie} </div>
  </div>
);

export default VeggieListEntry;
