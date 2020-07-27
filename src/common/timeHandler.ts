import dayjs from "dayjs";
import "dayjs/locale/en";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);
dayjs.locale("en");

export const timeHandler = dayjs;

export const isoToDate = (isoString: string): string =>
  timeHandler(isoString).format("YYYY MMM Do HH:mm:ss");
