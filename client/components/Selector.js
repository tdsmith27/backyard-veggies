import React from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";
import { formStyle, labelStyle, selectStyle } from "../../helpers";

const Selector = ({ changeSelect, value, list, listLabel }) => (
  <FormControl style={formStyle}>
    <InputLabel style={labelStyle} htmlFor="age-simple">
      {listLabel}
    </InputLabel>
    <Select
      style={selectStyle}
      value={value}
      onChange={e => changeSelect(e, listLabel)}>
      {list.map(([value, label], key) => (
        <MenuItem value={value} key={key}>
          {label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default Selector;
