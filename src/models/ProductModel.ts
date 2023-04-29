export default interface ProductModel {
   id: string;
   name: string;
   price: number;
   description: string;
}

export interface CartProductModel extends ProductModel {
   quantity: number;
}
