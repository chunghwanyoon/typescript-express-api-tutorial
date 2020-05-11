/**
 * Required External modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { Item } from "./item.interface";
import { Items } from "./items.interface";

/**
 * Router Definition
 */
export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */
/**
 * GET items/
 */
itemsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Items = await ItemService.findAll();

    res.status(200).send(items);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

/**
 * GET items/:id
 */
itemsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  try {
    const item: Item = await ItemService.find(id);
    res.status(200).send(item);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

/**
 * POST items/
 */
itemsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: Item = req.body.item;
    await ItemService.create(item);
    res.sendStatus(201);
  } catch (err) {
    res.status(404).send(err.message);
  }
});
/**
 * PUT items/
 */
itemsRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const item: Item = req.body.item;

    await ItemService.update(item);
    res.sendStatus(200);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

/**
 * DELETE items/:id
 */
itemsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await ItemService.remove(id);
    res.sendStatus(200);
  } catch (err) {
    res.status(404).send(err.message);
  }
});
