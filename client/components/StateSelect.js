import React from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";
import { formStyle, labelStyle, selectStyle } from "../../helpers";

const StateSelect = ({ changeState, state }) => (
  <FormControl style={formStyle}>
    <InputLabel style={labelStyle} htmlFor="age-simple">
      State
    </InputLabel>
    <Select
      style={selectStyle}
      value={state}
      onChange={changeState}
      inputProps={{
        state: "state",
        id: "age-simple"
      }}>
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value="alabama">Alabama</MenuItem>
      <MenuItem value="alaska">Alaska</MenuItem>
      <MenuItem value="arizona">Arizona</MenuItem>
      <MenuItem value="arkansas">Arkansas</MenuItem>
      <MenuItem value="california">California</MenuItem>
      <MenuItem value="colorado">Colorado</MenuItem>
      <MenuItem value="connecticut">Connecticut</MenuItem>
      <MenuItem value="delaware">Delaware</MenuItem>
      <MenuItem value="washington-dc">District Of Columbia</MenuItem>
      <MenuItem value="florida">Florida</MenuItem>
      <MenuItem value="georgia">Georgia</MenuItem>
      <MenuItem value="hawaii">Hawaii</MenuItem>
      <MenuItem value="idaho">Idaho</MenuItem>
      <MenuItem value="illinois">Illinois</MenuItem>
      <MenuItem value="indiana">Indiana</MenuItem>
      <MenuItem value="iowa">Iowa</MenuItem>
      <MenuItem value="kansas">Kansas</MenuItem>
      <MenuItem value="kentucky">Kentucky</MenuItem>
      <MenuItem value="louisiana">Louisiana</MenuItem>
      <MenuItem value="maine">Maine</MenuItem>
      <MenuItem value="maryland">Maryland</MenuItem>
      <MenuItem value="massachusetts">Massachusetts</MenuItem>
      <MenuItem value="michigan">Michigan</MenuItem>
      <MenuItem value="minnesota">Minnesota</MenuItem>
      <MenuItem value="mississippi">Mississippi</MenuItem>
      <MenuItem value="missouri">Missouri</MenuItem>
      <MenuItem value="montana">Montana</MenuItem>
      <MenuItem value="nebraska">Nebraska</MenuItem>
      <MenuItem value="nevada">Nevada</MenuItem>
      <MenuItem value="new-hampshire">New Hampshire</MenuItem>
      <MenuItem value="new-jersey">New Jersey</MenuItem>
      <MenuItem value="new-mexico">New Mexico</MenuItem>
      <MenuItem value="new-york">New York</MenuItem>
      <MenuItem value="north-carolina">North Carolina</MenuItem>
      <MenuItem value="north-dakota">North Dakota</MenuItem>
      <MenuItem value="ohio">Ohio</MenuItem>
      <MenuItem value="oklahoma">Oklahoma</MenuItem>
      <MenuItem value="oregon">Oregon</MenuItem>
      <MenuItem value="pennsylvania">Pennsylvania</MenuItem>
      <MenuItem value="rhode-island">Rhode Island</MenuItem>
      <MenuItem value="south-carolina">South Carolina</MenuItem>
      <MenuItem value="south-dakota">South Dakota</MenuItem>
      <MenuItem value="tennessee">Tennessee</MenuItem>
      <MenuItem value="texas">Texas</MenuItem>
      <MenuItem value="utah">Utah</MenuItem>
      <MenuItem value="vermont">Vermont</MenuItem>
      <MenuItem value="virginia">Virginia</MenuItem>
      <MenuItem value="washington">Washington</MenuItem>
      <MenuItem value="west-virginia">West Virginia</MenuItem>
      <MenuItem value="wisconsin">Wisconsin</MenuItem>
      <MenuItem value="wyoming">Wyoming</MenuItem>
    </Select>
  </FormControl>
);

export default StateSelect;
