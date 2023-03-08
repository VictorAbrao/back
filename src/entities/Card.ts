import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  list: string;

  constructor(title: string, content: string, list: string) {
    this.id = 0; // ou um valor padrão apropriado
    this.title = title;
    this.content = content;
    this.list = list;
  }
}