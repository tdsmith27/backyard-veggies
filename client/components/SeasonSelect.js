import React, { Fragment } from "react";

const SeasonSelect = ({ changeSeason }) => (
  <select onChange={changeSeason}>
    <option value="early-january">Early-January</option>
    <option value="late-January">Late-January</option>
    <option value="early-February">Early-February</option>
    <option value="late-February">Late-February</option>
    <option value="early-March">Early-March</option>
    <option value="late-March">Late-March</option>
    <option value="early-April">Early-April</option>
    <option value="late-April">Late-April</option>
    <option value="early-May">Early-May</option>
    <option value="late-May">Late-May</option>
    <option value="early-June">Early-June</option>
    <option value="late-June">Late-June</option>
    <option value="early-July">Early-July</option>
    <option value="late-July">Late-July</option>
    <option value="early-August">Early-August</option>
    <option value="late-August">Late-August</option>
    <option value="early-September">Early-September</option>
    <option value="late-September">Late-September</option>
    <option value="early-October">Early-October</option>
    <option value="late-October">Late-October</option>
    <option value="early-November">Early-November</option>
    <option value="late-November">Late-November</option>
    <option value="early-December">Early-December</option>
    <option value="late-December">Late-December</option>
  </select>
);

export default SeasonSelect;
