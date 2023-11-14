import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTimeStamps(createdAt: Date): string {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt.getTime();

  // Define the time units in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;

  // Calculate the time difference in the corresponding unit
  if (timeDifference < minute) {
    const seconds = Math.floor(timeDifference / 1000);
    return seconds === 1 ? `${seconds} second ago` : `${seconds} seconds ago`;
  } else if (timeDifference < hour) {
    const minutes = Math.floor(timeDifference / minute);
    return minutes === 1 ? `${minutes} minute ago` : `${minutes} minutes ago`;
  } else if (timeDifference < day) {
    const hours = Math.floor(timeDifference / hour);
    return hours === 1 ? `${hours} hour ago` : `${hours} hours ago`;
  } else if (timeDifference < week) {
    const days = Math.floor(timeDifference / day);
    return days === 1 ? `${days} day ago` : `${days} days ago`;
  } else if (timeDifference < month) {
    const weeks = Math.floor(timeDifference / week);
    return weeks === 1 ? `${weeks} week ago` : `${weeks} weeks ago`;
  } else if (timeDifference < year) {
    const months = Math.floor(timeDifference / month);
    return months === 1 ? `${months} month ago` : `${months} months ago`;
  } else {
    const years = Math.floor(timeDifference / year);
    return years === 1 ? `${years} year ago` : `${years} years ago`;
  }
}

export function divideNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(2) + "K";
  } else {
    return num.toString();
  }
}
