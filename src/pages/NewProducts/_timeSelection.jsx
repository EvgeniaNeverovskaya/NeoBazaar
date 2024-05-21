import React, { useState } from "react";
import { FormControl, Select } from "@chakra-ui/react";

const TimeSelection = () => {
  const [time, setTime] = useState("");

  const dispatchTime = ["Instant", "1 hour", "6 hours", "12 hours", "24 hours"];
  return (
    <FormControl id='category'>
      <Select
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder='Time of receipt of the goods by the customer'
        bg='#fff'
        color='#7E88A4'
        fontSize='16px'
        fontWeight='400'
        lineHeight='22px'>
        {dispatchTime.map((dis, index) => (
          <option key={index} value={dis}>
            {dis}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default TimeSelection;
