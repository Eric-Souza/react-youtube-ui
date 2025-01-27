export const formatRelativeTime = (dateString: string): string => {
  const now = Date.now();
  const publishedDate = new Date(dateString).getTime();
  const diffInSeconds = Math.floor((now - publishedDate) / 1000);

  const timeUnits = [
    { label: "year", seconds: 60 * 60 * 24 * 365 },
    { label: "month", seconds: 60 * 60 * 24 * 30 },
    { label: "week", seconds: 60 * 60 * 24 * 7 },
    { label: "day", seconds: 60 * 60 * 24 },
    { label: "hour", seconds: 60 * 60 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const unit of timeUnits) {
    const count = Math.floor(diffInSeconds / unit.seconds);
    if (count > 0) {
      return `${count} ${unit.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};
