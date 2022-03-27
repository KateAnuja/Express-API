import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer{
    @PrimaryGeneratedColumn()
    customerId : number;
    @Column()
    customerName : string;
    @Column()
    customerMobile : string;
    @Column()
    customerAadhar : string;
    @Column()
    customerPan : string;
    @Column()
    customerAccountNumber : string;
    @Column()
    customerIFSCCode : string;

}