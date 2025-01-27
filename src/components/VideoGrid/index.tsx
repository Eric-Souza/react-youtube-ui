import React, { FC, useState, useEffect } from "react";
import {
  ScrollView,
  View,
  ActivityIndicator,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import VideoCard from "../VideoCard";
import { fetchVideos } from "../../services/videos";
import { IVideo } from "../../models/IVideo";
import { videoGridStyles } from "./index.styles";

const VideoGrid = (): FC => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [nextPageToken, setNextPageToken] = useState<string | undefined>();
  const [scrolledToBottom, setScrolledToBottom] = useState<boolean>(false);

  useEffect(() => {
    loadInitialVideos();
  }, []);

  const loadInitialVideos = async () => {
    setLoading(true);

    try {
      const videoData = await fetchVideos();

      setVideos(videoData.videos ?? []);
      setNextPageToken(videoData.nextPageToken);
    } catch (error) {
      console.error("Failed to fetch initial videos:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreVideos = async () => {
    if (isFetchingMore || !nextPageToken) return;

    setIsFetchingMore(true);

    try {
      const videoData = await fetchVideos(nextPageToken);

      setVideos((prev: IVideo[]) => [...prev, ...(videoData.videos ?? [])]);
      setNextPageToken(videoData.nextPageToken);
    } catch (error) {
      console.error("Failed to load more videos:", error);
    } finally {
      setIsFetchingMore(false);
    }
  };

  const handleScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ): void => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;

    const clientHeight = layoutMeasurement.height;
    const scrollHeight = contentSize.height;
    const scrollTop = contentOffset.y;

    if (!scrolledToBottom && scrollTop + clientHeight >= scrollHeight - 200) {
      setScrolledToBottom(true);
      loadMoreVideos();
    } else if (
      scrolledToBottom &&
      scrollTop + clientHeight < scrollHeight - 200
    ) {
      setScrolledToBottom(false);
    }
  };

  return (
    <ScrollView
      style={videoGridStyles.container}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      <View style={videoGridStyles.grid}>
        {videos.map((video: IVideo) => (
          <View key={video.id} style={videoGridStyles.card}>
            <VideoCard {...video} />
          </View>
        ))}
      </View>

      {loading && videos.length === 0 && (
        <View style={videoGridStyles.loadingContainer}>
          <ActivityIndicator size="large" color="#606060" />
        </View>
      )}

      {isFetchingMore && (
        <View style={videoGridStyles.footer}>
          <ActivityIndicator color="#606060" />
        </View>
      )}
    </ScrollView>
  );
};

export default VideoGrid;
