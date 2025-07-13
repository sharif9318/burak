import { shapeIntoMongooseObjectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/errors";
import { Product, ProductInput, ProductUpdateInput } from "../libs/types/product";
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
public async updateChosenProduct(
    id: string,
    input: ProductUpdateInput
): Promise<Product> {
    id = shapeIntoMongooseObjectId(id);
    const result = await this.ProductModel
        .findOneAndUpdate({ _id: id }, input, { new: true })
        .exec();
    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

    // console.log("result:", result);
    return result;
}



}

export default ProductService;
