import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { EventProps } from "../common/types";

export function OutlinedCard({
  id,
  title,
  location,
  start_time,
  end_time,
}: EventProps) {
  const startDate = new Date(start_time);
  const endDate = new Date(end_time);
  const startDateString = startDate.toLocaleString().split(",")[0];
  const endDateString = endDate.toLocaleString().split(",")[0];

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
                {location}
              </Typography>
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                ID {id}
              </Typography>
              <Typography variant="body2">
                {`Start: ${startDateString}`}
                <br />
                {`End: ${endDateString}`}
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
