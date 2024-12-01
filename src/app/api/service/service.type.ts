export type ServiceType = {
  id: string | number;
  name: string;
  image: string;
  price: string | number;
  discount: string | number;
  description: string;
  createdAt?: string;
  updatedAt?: string;
};
