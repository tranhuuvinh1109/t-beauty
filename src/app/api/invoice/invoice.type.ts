import { CustomerType } from "../customer/customer.type";
import { ServiceType } from "../service/service.type";

export type InvoiceType = {
  id: string | number;
  details: (ServiceType & {
    quantity: number;
  })[];
  customer: CustomerType;
  discount: number;
  createdAt?: string;
  updatedAt?: string;
};
