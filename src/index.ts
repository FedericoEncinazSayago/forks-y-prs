import * as products from "./products.json";

class Product {
  id: number;
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  
  static findProductsBelow(minPrice: number): Product[] {
    const productsForJSON = products["default"];

    return productsForJSON.filter((element: Product) => element.price < minPrice);
  }
}

class User {
  name: string;
  products: Product[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }

  addProducts(newProducts: Product[]) {
    newProducts.forEach((element) => this.addProduct(element));
    // this.products = this.products.concat(newProduct) -> Que tener más consciencia de los metodos que puede
  }
}

export { User, Product };