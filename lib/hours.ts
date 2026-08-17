type DayHours = { open: number; close: number } | null;

const WEEK: DayHours[] = [
  null,
  { open: 6, close: 20 },
  { open: 6, close: 20 },
  { open: 6, close: 20 },
  { open: 6, close: 20 },
  { open: 6, close: 20 },
  { open: 8, close: 17 },
];

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getPacificParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);

  const get = (type: string) =>
    parts.find((part) => part.type === type)?.value ?? "";

  const weekday = get("weekday");
  const dayIndex = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(
    weekday,
  );
  const hour = Number(get("hour"));
  const minute = Number(get("minute"));

  return { dayIndex, minutes: hour * 60 + minute };
}

function formatHour(hour: number) {
  const suffix = hour >= 12 ? "PM" : "AM";
  const h = hour % 12 || 12;
  return `${h} ${suffix}`;
}

export function getBusinessStatus(date = new Date()) {
  const { dayIndex, minutes } = getPacificParts(date);
  const today = WEEK[dayIndex];

  if (today) {
    const openMins = today.open * 60;
    const closeMins = today.close * 60;
    if (minutes >= openMins && minutes < closeMins) {
      return {
        open: true,
        label: `Open ⋅ Closes ${formatHour(today.close)}`,
      };
    }
  }

  for (let offset = 0; offset < 7; offset += 1) {
    const nextIndex = (dayIndex + offset) % 7;
    const next = WEEK[nextIndex];
    if (!next) continue;
    if (offset === 0 && minutes >= next.open * 60) continue;
    const dayLabel = offset === 0 ? "" : ` ${DAY_NAMES[nextIndex].slice(0, 3)}`;
    return {
      open: false,
      label: `Closed ⋅ Opens ${formatHour(next.open)}${dayLabel}`,
    };
  }

  return { open: false, label: "Closed" };
}
