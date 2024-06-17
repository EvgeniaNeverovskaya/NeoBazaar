import React, { useState } from "react";
import { FormControl, Select, FormErrorMessage } from "@chakra-ui/react";

const TimeSelection = ({ time, setTime, timeError }) => {
  const isErrorTime = timeError && time === "";

  const dispatchTime = ["Instant", "1 hour", "6 hours", "12 hours", "24 hours"];
  return (
    <FormControl id='dispatchTime' isInvalid={isErrorTime}>
      <Select
        value={time}
        onChange={(e) => setTime(e.target.value)}
        bg='#fff'
        color='#7E88A4'
        fontSize='16px'
        fontWeight='400'
        lineHeight='22px'
        placeholder="Time of receipt of the goods by the customer">
        {dispatchTime.map((dis, index) => (
          <option key={index} value={dis}>
            {dis}
          </option>
        ))}
      </Select>
      {isErrorTime && (
        <FormErrorMessage>Time of receipt is required.</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default TimeSelection;
