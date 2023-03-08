import { EntityRepository, Repository } from 'typeorm';
import Card from "../entities/Card";

@EntityRepository(Card)
export class CardRepository extends Repository<Card> {
  async createCard(card: Card): Promise<Card> {
    return this.save(card);
  }

  async updateCard(id: string, card: Card): Promise<Card> {
    const result = await this.update(id, card);

    if (result.affected === 0) {
      throw new Error(`Card with ID "${id}" not found.`);
    }

    return card;
  }

  async deleteCard(id: string): Promise<void> {
    const result = await this.delete(id);

    if (result.affected === 0) {
      throw new Error(`Card with ID "${id}" not found.`);
    }
  }
}