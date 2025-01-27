import mockThumbnail from "../assets/mock-thumbnail.png";
import {
  IVideo,
  IYouTubeSearchResponse,
  IYouTubeSearchResult,
} from "../models/IVideo";

const API_BASE_URL = "https://www.googleapis.com/youtube/v3/search";
const API_KEY = process.env.REACT_APP_API_KEY;

/**
 * Fetch videos from the YouTube API
 * @param nextPageToken Optional token for paginated results
 * @returns Object containing videos and nextPageToken
 */
export const fetchVideos = async (nextPageToken?: string) => {
  try {
    if (!API_KEY) {
      throw new Error(
        "API key is missing. Please set REACT_APP_API_KEY in your .env file."
      );
    }

    const url = new URL(API_BASE_URL);
    url.searchParams.append("part", "snippet");
    url.searchParams.append("type", "video");
    url.searchParams.append("maxResults", "60");
    url.searchParams.append("q", "programming");
    url.searchParams.append("key", API_KEY);

    if (nextPageToken) {
      url.searchParams.append("pageToken", nextPageToken);
    }

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.statusText}`);
    }

    const data: IYouTubeSearchResponse = await response.json();

    const videos: IVideo[] = data.items.map((item: IYouTubeSearchResult) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      channelId: item.snippet.channelId,
      channelTitle: item.snippet.channelTitle,
      thumbnail: item.snippet.thumbnails?.high?.url || "",
      publishedAt: item.snippet.publishedAt,
      liveBroadcastContent: item.snippet.liveBroadcastContent,
      publishTime: item.snippet.publishTime,
    }));

    return {
      videos,
      nextPageToken: data.nextPageToken,
    };
  } catch (error) {
    console.error("Error fetching videos from YouTube API:", error);

    // Fallback to mocked videos
    return fetchVideosMocked();
  }
};

// Mocked video data
const mockedVideos: IVideo[] = Array.from({ length: 60 }, (_, index) => ({
  id: `mocked-id-${index}`,
  title: `Mocked Video Title ${index + 1}`,
  description: `This is a description for mocked video ${index + 1}.`,
  channelId: `mocked-channel-id-${index}`,
  channelTitle: `Mocked Channel ${index + 1}`,
  thumbnail: mockThumbnail,
  publishedAt: new Date().toISOString(),
  liveBroadcastContent: "none",
  publishTime: new Date().toISOString(),
}));

/**
 * Function to fetch mocked videos
 * @returns Mocked video data structures
 */
export const fetchVideosMocked = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    videos: mockedVideos,
    nextPageToken: undefined,
  };
};
