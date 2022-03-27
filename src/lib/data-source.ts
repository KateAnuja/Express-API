import { DataSource } from "typeorm";
import { Customer } from "../models/customer";
import { Invoice } from "../models/invoice";
import { Item } from "../models/item";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "mumba",
    synchronize: true,
    logging: true,
    entities: [Customer, Item, Invoice],
    migrationsRun:false,
    //subscribers: [],
    //migrations: [],
})

