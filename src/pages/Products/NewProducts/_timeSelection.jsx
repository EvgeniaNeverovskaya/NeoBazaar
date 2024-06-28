import React, { useState } from "react";
import { FormControl, Select, FormErrorMessage } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const TimeSelection = ({ time, setTime, timeError }) => {
  const {t} = useTranslation();

  const isErrorTime = timeError && time === "";

  const dispatchTime = [t("products.form.instant"), t("products.form.1_hour"), t("products.form.6_hours"), t("products.form.12_hours"), t("products.form.24_hours")];
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
        placeholder={t("products.form.time")}>
        {dispatchTime.map((dis, index) => (
          <option key={index} value={dis}>
            {dis}
          </option>
        ))}
      </Select>
      {isErrorTime && (
        <FormErrorMessage>{t("products.form.time_error")}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default TimeSelection;
