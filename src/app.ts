import 'reflect-metadata';
import express from 'express';
import customer from './controllers/customer'
import { DataSource } from "typeorm";
import { Customer } from "./models/customer";
import { Invoice } from "./models/invoice";
import { Item } from "./models/item";
import {AppDataSource} from './lib/data-source';

AppDataSource.initialize()
     .then(() => {
         // here you can start to work with your database
     })
     .catch((error) => console.log(error))

const app = express();

app.get('/abc',(req,res)=>{
    res.send("abc");
})

app.use('/customer', customer);

app.listen(3000);