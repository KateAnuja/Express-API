import { Service } from "typedi";
import { AppDataSource } from "../lib/data-source";
import { Customer } from "../models/customer";
import { CustomerRepository } from "../repositories/customer.repository";

@Service()
export class CustomerService{
    // repository = new CustomerRepository();
    
    async findById(id : number){
        return await CustomerRepository.findOne({
            where:{
                customerId:id
            }
        });
    }

    async save(customer : Customer){
      return  await CustomerRepository.save(customer);
    }


}