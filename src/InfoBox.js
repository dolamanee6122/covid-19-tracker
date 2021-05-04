import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
function InfoBox({ title, cases, total }) {
  return (
    <Card className="infoBox">
      <CardContent>
        {/*Title i.e cornovirus cases */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        {/*cases: +3000 */}
        <h2 className="infoBox__title">{cases}</h2>

        {/*1.2M total*/}
        <Typography className="infoBox__title" color="textSecondary">
          {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
