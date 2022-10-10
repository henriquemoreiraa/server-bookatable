import { Request, Response } from "express";
import { prisma } from "../database/prismaClient";

export const bookTable = async (req: Request, res: Response) => {
  const { name, date, hour, tableId } = req.body;

  if (!name) {
    res.status(400);
    throw new Error("Add a name!");
  }

  const book = await prisma.book.create({
    data: {
      name,
      date,
      hour,
      tableId,
    },
  });

  res.status(200).send({ name, date, hour });
};

export const allbookedTables = async (req: Request, res: Response) => {
  const book = await prisma.book.findMany({
    include: {
      table: true,
    },
  });

  res.status(200).send(book);
};
