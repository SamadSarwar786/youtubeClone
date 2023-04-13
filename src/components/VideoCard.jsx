import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelUrl,
} from "../Utils/constant";

const VideoCard = ({ video: { id, snippet } }) => {
  if (id == null) return "...Loading";
  return (
    <Card sx={{ width: { xs: "100%", sm: "358px", md: "320px" } }}>
      <Link
        to={id.videoId ? `/video/${id.videoId || id.playlistId}` : demoVideoUrl}
      >
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link
          to={
            id.videoId ? `/video/${id.videoId || id.playlistId}` : demoVideoUrl
          }
        >
          <Typography variant="subtitle1" color="#FFF" fontWeight="bold">
            {snippet?.title.slice(0, 60) || demoVideoTitle}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="gray" fontWeight="bold">
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
