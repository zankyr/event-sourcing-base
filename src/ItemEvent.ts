import * as fs from "fs";
import * as path from "path";
import * as os from "os";
import { monitorEventLoopDelay } from "perf_hooks";

const EVENT_LOG_PATH = path.join(__dirname, "event_log.txt");

export const EVENT = {
  item_created: "item-created",
  item_bought: "item-bought",
  item_sold: "item-sold",
  user_crated: "user-created",
};

export const reset = function reset() {
  fs.writeFileSync(EVENT_LOG_PATH, "");
};

export const append = function append(event) {
  fs.appendFileSync(EVENT_LOG_PATH, JSON.stringify(event) + os.EOL);
};

const getEvents = function getEvents():GenericEvent {
  const eventLines = fs.readFileSync(EVENT_LOG_PATH, "utf-8");

  return eventLines
    .split(os.EOL)
    .filter((eventLineStr) => eventLineStr.length)
    .map((eventLineStr) => {
      let eventLine = {};
      try {
        eventLine = JSON.parse(eventLineStr);
      } catch (err) {
        // eslint-disable-next-line
        console.error(err);
      }
      return eventLine;
    });
};


type GenericEvent = {
  [key: string]: string;
}

export const rebuild = function rebuild(eventNumber?: number) {
  let events = getEvents();

  if (!isNaN(eventNumber)) {
    events = events.splice(0, eventNumber);
  }

  events.forEach((event) => {
    if(event.)
  });
};
