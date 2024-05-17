import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
const dayjs = require('dayjs');
const duration = require('dayjs/plugin/duration');
dayjs.extend(duration);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function durationFormatter(time: string) {
  return `${dayjs.duration(time).asMinutes()}m`
}
