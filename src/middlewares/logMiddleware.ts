import { Request, Response, NextFunction } from "express";
import moment from "moment";
import { getRepository } from "typeorm";
import Card from "../entities/Card";

export async function logMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const method = req.method;

  if (method !== "PUT" && method !== "DELETE") {
    return next();
  }

  const dateTime = moment().format("DD/MM/YYYY HH:mm:ss");

  const id = req.params.id;

  let title = "";

  // Recupera o título do cartão usando o id do cartão da solicitação
  const cardRepository = getRepository(Card);
  const card = await cardRepository.findOne(id);
  if (card) {
    title = card.title;

    const action = method === "PUT" ? "Alterado" : "Removido";

    console.log(`${dateTime} - Card ${id} - ${title} - ${action}`);
  }

  return next();
}
