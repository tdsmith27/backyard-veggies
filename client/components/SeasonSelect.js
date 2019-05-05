import React from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";
import { formStyle, labelStyle, selectStyle } from "../../helpers";

const SeasonSelect = ({ changeSelect, season }) => (
  <FormControl style={formStyle}>
    <InputLabel style={labelStyle} htmlFor="age-simple">
      Month
    </InputLabel>
    <Select
      style={selectStyle}
      value={season}
      onChange={e => changeSelect(e, "season")}
      inputProps={{
        state: "month",
        id: "age-simple"
      }}>
      <MenuItem value="early-january">January</MenuItem>
      <MenuItem value="early-february">February</MenuItem>
      <MenuItem value="early-march">March</MenuItem>
      <MenuItem value="early-april">April</MenuItem>
      <MenuItem value="early-may">May</MenuItem>
      <MenuItem value="early-june">June</MenuItem>
      <MenuItem value="early-july">July</MenuItem>
      <MenuItem value="early-august">August</MenuItem>
      <MenuItem value="early-september">September</MenuItem>
      <MenuItem value="early-october">October</MenuItem>
      <MenuItem value="early-november">November</MenuItem>
      <MenuItem value="early-december">December</MenuItem>
    </Select>
  </FormControl>
);

export default SeasonSelect;
