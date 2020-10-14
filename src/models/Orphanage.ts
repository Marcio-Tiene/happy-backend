import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orphanages')
export class Orphanage {
  id: number;
  name: string;
}
