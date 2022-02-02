import React, { useState } from "react";
import { TextField } from "@mui/material";
import { MobileDatePicker } from "@mui/lab";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const useDatePicker = () => {
  const [usedBenefitDate, setUsedBenefitDate] = useState(new Date());

  const comopnent = () => {
    return (
      <div className="calendar" style={{ height: "24px", width: "100px" }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            value={usedBenefitDate}
            onChange={(newValue) => {
              setUsedBenefitDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            inputFormat="yyyy.MM.dd"
          />
        </LocalizationProvider>
      </div>
    );
  };

  return [usedBenefitDate, setUsedBenefitDate, comopnent];
};

export default useDatePicker;
