import { Router } from 'express';
import ProductController from '../controller/product.controller.js';
import ProductService from '../../application/use-cases/product.service.js';
import MockProductRepository from '../../domain/repositories/infrastructure/repositories/product.mock.repository.js';
 
const productRepository = new MockProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);
 
const router = Router();
router.get('/', productController.getAll);
router.post('/', productController.create);
 
export default router;