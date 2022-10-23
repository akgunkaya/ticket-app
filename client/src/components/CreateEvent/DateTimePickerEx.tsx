import React from "react";
import { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Button from "@mui/material/Button";

type Props = {
  startTime: Dayjs | null;
  setStartTime: (val: Dayjs | null) => void;
  endTime: Dayjs | null;
  setEndTime: (val: Dayjs | null) => void;
  location: string;
  setLocation: (val: string) => void;
  title: string;
  setTitle: (val: string) => void;
  handleSubmit: (event: { preventDefault: () => void }) => void;
};

const DateTimePickerEx: React.FC<Props> = ({
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  location,
  setLocation,
  title,
  setTitle,
  handleSubmit,
}) => {
  const handleChangeStartTime = (newValue: Dayjs | null) => {
    setStartTime(newValue);
  };
  const handleChangeEndTime = (newValue: Dayjs | null) => {
    setEndTime(newValue);
  };
  const handleChangeLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };
  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={handleSubmit}>
        <Stack
          spacing={3}
          sx={{
            padding: "20px",
          }}
        >
          <DateTimePicker
            label="Start Date"
            value={startTime}
            onChange={handleChangeStartTime}
            renderInput={(params) => <TextField required {...params} />}
          />
          <DateTimePicker
            label="End Date"
            value={endTime}
            onChange={handleChangeEndTime}
            renderInput={(params) => <TextField required {...params} />}
          />
          <TextField
            id="standard-basic"
            label="Location"
            value={location}
            onChange={handleChangeLocation}
            variant="filled"
            required
          />
          <TextField
            id="standard-basic"
            label="Title"
            value={title}
            onChange={handleChangeTitle}
            variant="filled"
            required
          />
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </Stack>
      </form>
    </LocalizationProvider>
  );
};

export default DateTimePickerEx;
