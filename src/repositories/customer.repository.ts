import { Customer } from "../models/customer";
import { AppDataSource } from "../lib/data-source";

export const CustomerRepository = AppDataSource.getRepository(Customer).extend({
    myCustomFn(id : number){
        
    }
})

    
   
