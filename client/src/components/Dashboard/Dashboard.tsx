import Card from "./Card";
import Box from "@mui/material/Box";

const Dashboard = (events: any) => {
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
        {events.events && events.events.length ? (
          events.events.map((event: any) => (
            <Card key={event.id} event={event} />
          ))
        ) : (
          <p>No events listed</p>
        )}
      </Box>
    </>
  );
};

export default Dashboard;
