import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { SnackbarModule } from "../components/SnackbarModule";
import { DateTimePickerForm } from "../components/DateTimePickerForm";

export function CreateEvent(props: any) {
  const [startTime, setStartTime] = useState<Dayjs | null>(dayjs());
  const [endTime, setEndTime] = useState<Dayjs | null>(dayjs());
  const [location, setLocation] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [response, setResponse] = useState<any>([]);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        start_time: startTime,
        end_time: endTime,
        location: location,
        title: title,
      }),
    };
    fetch("/event", requestOptions).then((response) => setResponse(response));

    setLocation("");
    setTitle("");
  };

  useEffect(() => {
    if (response.status === 201) {
      props.setEventAdded(true);
    }
  }, [response, props]);
  return (
    <>
      <DateTimePickerForm
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
        location={location}
        setLocation={setLocation}
        title={title}
        setTitle={setTitle}
        handleSubmit={handleSubmit}
      />
      <SnackbarModule open={props.eventAdded} setOpen={props.setEventAdded} />
    </>
  );
}
