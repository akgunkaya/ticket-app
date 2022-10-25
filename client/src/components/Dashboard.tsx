import { OutlinedCard } from "./OutlinedCard";
import Box from "@mui/material/Box";
import { EventArrayProps, EventProps } from "../common/types";

export function Dashboard(props: EventArrayProps) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          aligntItems: "stretch",
        }}
      >
        {props.events.length ? (
          props.events.map((event: EventProps) => (
            <OutlinedCard key={event.id} {...event} />
          ))
        ) : (
          <p>No events listed</p>
        )}
      </Box>
    </>
  );
}
