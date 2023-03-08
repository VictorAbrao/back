import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { CardRepository } from "../repositories/cardsRepository";

class CardsController {
  async index(req: Request, res: Response) {
    const cardRepository = getCustomRepository(CardRepository);

    const cards = await cardRepository.find();

    return res.json(cards);
  }

  async create(req: Request, res: Response) {
    const cardRepository = getCustomRepository(CardRepository);
    const { title, content, list } = req.body;

    if (!title || !content || !list || req.body.id) {
      return res.status(400).json({ error: "Invalid data" });
    }

    const card = cardRepository.create({
      title,
      content,
      list,
    });

    await cardRepository.save(card);

    return res.status(201).json(card);
  }

  async update(req: Request, res: Response) {
    const cardRepository = getCustomRepository(CardRepository);
    const { id } = req.params;
    const { title, content, list } = req.body;

    const card = await cardRepository.findOne(id);

    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }

    if (!title || !content || !list || id !== card.id.toString()) {
      return res.status(400).json({ error: "Invalid data" });
    }

    card.title = title;
    card.content = content;
    card.list = list;

    await cardRepository.save(card);

    return res.json(card);
  }

  async delete(req: Request, res: Response) {
    const cardRepository = getCustomRepository(CardRepository);
    const { id } = req.params;

    const card = await cardRepository.findOne(id);

    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }

    await cardRepository.remove(card);

    const cards = await cardRepository.find();

    return res.json(cards);
  }
}

export default new CardsController();
