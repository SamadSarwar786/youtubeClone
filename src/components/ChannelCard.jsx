import { CheckCircle } from "@mui/icons-material";
import { CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
} from "../Utils/constant";

const ChannelCard = ({ channelDetails, marginTop }) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop,
        height: "100%",
      }}
    >
      <Link
        to={
          channelDetails?.id?.channelId
            ? `/channel/${channelDetails?.id?.channelId}`
            : demoChannelUrl
        }
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#FFF",
          }}
        >
          <CardMedia
            image={
              channelDetails?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetails?.snippet?.tiltle}
            sx={{
              borderRadius: "50%",
              backgroundColor: "yellow",
              width: "180px",
              height: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography>
            {channelDetails?.snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ color: "gray", fontSize: 12, ml: "5px" }} />
          </Typography>

          {channelDetails?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetails?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
