import Errors, { HttpCode, Message } from "../libs/errors";
import { Product, ProductInput } from "../libs/types/product";
import ProductModel from "../schema/product-model";

class ProductService {
  private readonly ProductModel;

  constructor() {
    this.ProductModel = ProductModel;
  }
/** SPA */

/** SSR */

public async createNewProduct(input: ProductInput): Promise<Product> {
  try {
    return await this.ProductModel.create(input);
  } catch (err) {
    console.error("Error, model:createNewProduct:", err);
    throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
  }
}

}

export default ProductService;
