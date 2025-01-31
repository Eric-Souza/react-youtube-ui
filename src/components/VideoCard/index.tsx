import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { createPortal } from "react-dom";
import { videoCardStyles } from "./index.styles";
import { decodeHtmlEntities } from "../../utils/formatString";
import { formatRelativeTime } from "../../utils/formatTime";

interface VideoCardProps {
  thumbnail: string;
  title: string;
  channelTitle: string;
  publishTime: string;
  views?: string;
  duration?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  thumbnail,
  title,
  channelTitle,
  publishTime,
  views = "1000", // Since views and duration are not returned, we hardcode them
  duration = "12:34",
}) => {
  const [hovered, setHovered] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [popupDelay, setPopupDelay] = useState<NodeJS.Timeout | null>(null);

  const [cardPosition, setCardPosition] = useState({
    top: 0,
    left: 0,
    rightOverflow: false,
  });

  // Hovering logic
  const handleMouseEnter = (event: {
    target: { getBoundingClientRect: () => any };
  }) => {
    const rect = event.target.getBoundingClientRect();
    const screenWidth = window.innerWidth;

    const isRightOverflow = rect.left + 400 > screenWidth;

    setCardPosition({
      top: rect.top + window.scrollY,
      left: isRightOverflow ? rect.left - 200 : rect.left + window.scrollX,
      rightOverflow: isRightOverflow,
    });

    setShowPlaceholder(true);

    const delay = setTimeout(() => {
      setHovered(true);
      setShowPlaceholder(false);
    }, 1000);

    setPopupDelay(delay);
  };

  const handleMouseLeave = () => {
    if (popupDelay) {
      clearTimeout(popupDelay);
    }

    setHovered(false);
    setShowPlaceholder(false);
  };

  return (
    <View
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={videoCardStyles.container}
    >
      <Pressable>
        <View style={videoCardStyles.thumbnailContainer}>
          <Image
            source={{ uri: thumbnail }}
            style={videoCardStyles.thumbnail}
            resizeMode="cover"
          />

          <View style={videoCardStyles.durationBadge}>
            <Text style={videoCardStyles.durationText}>{duration}</Text>
          </View>
        </View>

        <View style={videoCardStyles.infoContainer}>
          <Text numberOfLines={2} style={videoCardStyles.cardTitle}>
            {decodeHtmlEntities(title)}
          </Text>

          <Text style={videoCardStyles.channelTitle}>{channelTitle}</Text>

          <Text style={videoCardStyles.cardSubtitle}>
            {views} views • {formatRelativeTime(publishTime)}
          </Text>
        </View>
      </Pressable>

      {showPlaceholder && !hovered && (
        <View style={videoCardStyles.placeholder}>
          <Text style={videoCardStyles.placeholderText}>
            Keep hovering to play
          </Text>
        </View>
      )}

      {/* Hover popup */}
      {hovered &&
        createPortal(
          <View
            style={[
              videoCardStyles.popupContainer,
              {
                top: cardPosition.top - 100,
                left: cardPosition.left,
              },
            ]}
          >
            <Image
              source={{ uri: thumbnail }}
              style={videoCardStyles.popupImage}
              resizeMode="cover"
            />

            <View style={videoCardStyles.popupInfo}>
              <Text numberOfLines={2} style={videoCardStyles.popupTitle}>
                {decodeHtmlEntities(title)}
              </Text>

              <Text style={videoCardStyles.popupSubtitle}>{channelTitle}</Text>

              <Text style={videoCardStyles.popupSubtitle}>
                {views} views • {formatRelativeTime(publishTime)}
              </Text>
            </View>

            <View style={videoCardStyles.popupButtons}>
              <Text style={videoCardStyles.popupButton}>Watch later</Text>
              <Text style={videoCardStyles.popupButton}>Add to queue</Text>
            </View>
          </View>,
          document.body
        )}
    </View>
  );
};

export default VideoCard;
