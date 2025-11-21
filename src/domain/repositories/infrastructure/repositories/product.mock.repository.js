class MockProductRepository {
    constructor() {
        this.products = [];
    }

    async getAll() {
        return this.products;
    }

    async create(productData) {
        const newProduct = { id: Date.now(), ...productData };
        this.products.push(newProduct);
        return newProduct;
    }
}
export default MockProductRepository;