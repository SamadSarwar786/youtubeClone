import { CheckCircle } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../Utils/FetchFromAPI";
import Videos from "./Videos";

const VideoDetails = () => {
  const [videoDetail, setvideoDetail] = useState(null);
  const [videos, setvideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      console.log("data 1", data.items);
      setvideoDetail(data?.items[0]);
    });
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        console.log("data 2", data.items);
        setvideos(data.items);
      }
    );
  }, [id]);

  if (videoDetail == null) return "....Loading";

  const {
    snippet: { title, channelTitle, channelId },
    statistics: { likeCount, viewCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Grid container spacing={2}>
        <Grid item md={9} xs={12}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            className="react-player"
          />
          <Typography variant="h6" fontWeight="bold" pl={2} color="#FFF">
            {title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ color: "#FFF" }}
            py={0.5}
            px={2}
          >
            <Link to={`/channel/${channelId}`}>
              <Typography variant="subtitle1" color="#FFF">
                {channelTitle}
                <CheckCircle
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </Typography>
            </Link>
            <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" sx={{ opacity: "0.7" }}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" sx={{ opacity: "0.7" }}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid  item justifyContent="center" alignItems="center">
          {videos.length > 0 && <Videos videos={videos} direction="column" />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoDetails;
