import { todaysShows, nextDaysShows } from "../funcs";

export const timetable = [
  {
    id: 1,
    time: todaysShows(18, 0, 0).toLocaleTimeString("en-EN", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    value: Date.parse(todaysShows(18, 0, 0)),
  },
  {
    id: 2,
    time: todaysShows(21, 30, 0).toLocaleTimeString("en-EN", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    value: Date.parse(todaysShows(21, 30, 0)),
  },
  {
    id: 3,
    time: nextDaysShows(18, 0, 0, 1).toLocaleString("en-EN", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    value: Date.parse(nextDaysShows(18, 0, 0, 1)),
  },
  {
    id: 4,
    time: nextDaysShows(21, 30, 0, 1).toLocaleString("en-EN", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    value: Date.parse(nextDaysShows(21, 30, 0, 1)),
  },
  {
    id: 5,
    time: nextDaysShows(18, 0, 0, 2).toLocaleString("en-EN", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    value: Date.parse(nextDaysShows(18, 0, 0, 2)),
  },
  {
    id: 6,
    time: nextDaysShows(21, 30, 0, 2).toLocaleString("en-EN", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    value: Date.parse(nextDaysShows(21, 30, 0, 2)),
  },
];
