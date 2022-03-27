import { Router } from "express";
import Container from "typedi";
import { Customer } from "../models/customer";
import { CustomerService } from "../services/customer.service";

const serviceInstance = Container.get(CustomerService);
const router = Router();
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })



router.post('/addCustomer',jsonParser,(req,res)=>{
    let customer = req.body;
    console.log(customer.customerName);
    serviceInstance.save(customer);
    res.send("customer save successfully");

})

router.get('/:id',async (req,res)=>{
    let id= parseInt(req.params.id);
    let customer=await serviceInstance.findById(id);
    res.send(customer);
})



export default router;

