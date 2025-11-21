class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    getAll = async (req, res) => {
        const products = await this.productService.getAllProducts();
        res.status(200).json(products);
    }

    create = async (req, res) => {
        const productData = req.body;
        const newProduct = await this.productService.createProduct(productData);
        res.status(201).json(newProduct);
    }
}
export default ProductController;