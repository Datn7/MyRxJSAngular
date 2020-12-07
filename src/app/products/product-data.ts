import { Product } from "./product";

export class ProductData {
  static products: Product[] = [
    {
      id: 1,
      productName: "თეთრი ღვინო",
      productCode: "THs45dz",
      description: "Leaf rake with 48-inch wooden handle",
      price: 19.95,
      categoryId: 1,
      quantityInStock: 15,
      supplierIds: [1, 2],
    },
    {
      id: 2,
      productName: "შავი ღვინო",
      productCode: "doBOuXo",
      description: "15 gallon capacity rolling garden cart",
      price: 32.99,
      categoryId: 1,
      quantityInStock: 2,
      supplierIds: [3, 4],
    },
    {
      id: 5,
      productName: "ჭაჭა",
      productCode: "zKKtYAo",
      description: "Curved claw steel hammer",
      price: 8.9,
      categoryId: 3,
      quantityInStock: 8,
      supplierIds: [5, 6],
    },
    {
      id: 8,
      productName: "კონიაკი",
      productCode: "LbTW0AH",
      description: "15-inch steel blade hand saw",
      price: 11.55,
      categoryId: 3,
      quantityInStock: 6,
      supplierIds: [7, 8],
    },
    {
      id: 10,
      productName: "თეთრი ყურძენი",
      productCode: "QLu7PLL",
      description: "Standard two-button video game controller",
      price: 35.95,
      categoryId: 5,
      quantityInStock: 12,
      supplierIds: [9, 10],
    },
  ];
}
