
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Cargo {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    descripcion: string;
}
