import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./customer";
import { Item } from "./item";

@Entity()
export class Invoice {
    @PrimaryGeneratedColumn()
    invoiceId : number;
    @Column()
    invoiceDate : string;
    @Column()
    customerId : number;
    @Column()
    itemId : number;
    @Column()
    weight : number;
    @Column()
    price : number;
    @Column()
    totalAmount : number;
    @Column()
    deduction : number;
    @Column()
    payableAmount : number;
}