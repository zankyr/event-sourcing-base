import { stringify } from "querystring";
import * as ItemEvent from "./ItemEvent";

const users = {};

export const create = (email: string, username: string) => {
  const userCreatedEvent = {
    type: ItemEvent.EVENT.user_crated,
    id: email,
    username: username,
    createdAt: Date.now(),
  };

  ItemEvent.append(userCreatedEvent);
  users[email] = username;
};

export const getAll = () => {
  return users;
};
