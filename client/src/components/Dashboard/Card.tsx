import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function OutlinedCard(event: any) {
  const startTimeString = new Date(event.event.start_time).toString();
  const endTimeString = new Date(event.event.end_time).toString();

  return (
    <>
      <Box sx={{ minWidth: 265, maxWidth: 265, flex: 1, margin: "5px" }}>
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {event.event.location}
              </Typography>
              <Typography variant="h5" component="div">
                {event.event.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                ID {event.event.id}
              </Typography>
              <Typography variant="body2">
                {startTimeString}
                <br />
                {endTimeString}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </React.Fragment>
        </Card>
      </Box>
    </>
  );
}
