import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item{
    @PrimaryGeneratedColumn()
    itemId : number;
    @Column()
    itemName : string;
    @Column()
    itemPrice : number;
    @Column()
    image : string;
}