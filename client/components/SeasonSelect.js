import React, { Fragment } from "react";

const SeasonSelect = ({ changeSeason }) => (
  <select onChange={changeSeason}>
    <option value="early-january">Early-January</option>
    <option value="late-january">Late-January</option>
    <option value="early-february">Early-February</option>
    <option value="late-february">Late-February</option>
    <option value="early-march">Early-March</option>
    <option value="late-march">Late-March</option>
    <option value="early-april">Early-April</option>
    <option value="late-april">Late-April</option>
    <option value="early-may">Early-May</option>
    <option value="late-may">Late-May</option>
    <option value="early-june">Early-June</option>
    <option value="late-june">Late-June</option>
    <option value="early-july">Early-July</option>
    <option value="late-july">Late-July</option>
    <option value="early-august">Early-August</option>
    <option value="late-august">Late-August</option>
    <option value="early-september">Early-September</option>
    <option value="late-september">Late-September</option>
    <option value="early-october">Early-October</option>
    <option value="late-october">Late-October</option>
    <option value="early-november">Early-November</option>
    <option value="late-november">Late-November</option>
    <option value="early-december">Early-December</option>
    <option value="late-december">Late-December</option>
  </select>
);

export default SeasonSelect;
