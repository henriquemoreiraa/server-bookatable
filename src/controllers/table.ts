import { Request, Response } from "express";
import { prisma } from "../database/prismaClient";

export const createTable = async (req: Request, res: Response) => {
  const { table_num, chairs, price } = req.body;

  const table = await prisma.table.create({
    data: {
      chairs,
      price,
      table_num,
    },
  });

  res.status(200).send({ chairs, price, table_num });
};

export const allTables = async (req: Request, res: Response) => {
  const table = await prisma.table.findMany({
    include: {
      Book: true,
    },
  });

  res.status(200).send(table);
};

export const updateTable = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { table_num, chairs, price } = req.body;

  const table = await prisma.table.update({
    where: {
      id,
    },
    data: {
      chairs,
      price,
      table_num,
    },
  });

  res.status(200).send(table);
};

export const deleteTable = async (req: Request, res: Response) => {
  const { id } = req.params;

  const delrel = await prisma.table.update({
    where: {
      id,
    },
    data: {
      Book: {
        deleteMany: {},
      },
    },
  });

  const table = await prisma.table.delete({
    where: {
      id,
    },
  });

  res.status(200).send(id);
};
