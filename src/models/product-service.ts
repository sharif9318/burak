import ProductModel from "../schema/product-model";
class ProductService {
  private readonly ProductModel;

  constructor() {
    this.ProductModel = ProductModel;
  }
}

export default ProductService;
