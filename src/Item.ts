import { INSPECT_MAX_BYTES } from "buffer";
import { stringify } from "querystring";
import * as ItemEvent from "./ItemEvent";

interface IItem {
  itemId: string;
  cost: number;
  users: string[];
}

const items: IItem[] = [];

export type ItemCreated = {
  type: string;
  itemId: string;
  cost: number;
  createdAt: number;
};

export const create = (itemId: string, cost: number) => {
  const itemCreatedEvent: ItemCreated = {
    type: ItemEvent.EVENT.item_created,
    itemId: itemId,
    cost: cost,
    createdAt: Date.now(),
  };

  ItemEvent.append(itemCreatedEvent);

  items.push({
    itemId,
    cost,
    users: [],
  });
};

export type ItemBought = {
  type: string;
  itemId: string;
  userId: string;
  amount: number;
  timestamp: number;
};

export const buy = (itemId: string, userId: string, amount: number) => {
  const itemBoughtEvent: ItemBought = {
    type: ItemEvent.EVENT.item_bought,
    itemId: itemId,
    userId: userId,
    amount: amount,
    timestamp: Date.now(),
  };

  ItemEvent.append(itemBoughtEvent);

  let item = items.find((item) => item.itemId === itemId);
  item.users.push(userId);
};

export type ItemSold = {
  type: string;
  itemId: string;
  userId: string;
  amount: number;
  timestamp: number;
};

export const sell = (itemId: string, userId: string, amount: number) => {
  const itemSoldEvent: ItemSold = {
    type: ItemEvent.EVENT.item_sold,
    itemId: itemId,
    userId: userId,
    amount: amount,
    timestamp: Date.now(),
  };

  ItemEvent.append(itemSoldEvent);

  let item = items.find((item) => item.itemId === itemId);
  item.users.splice(
    item.users.findIndex((_userId) => _userId === userId),
    1
  );
};

export const getAll = () => {
  return items;
};
