import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/Domain/Model/Product.entity';
import { Repository } from 'typeorm';

export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    findAll(): Promise<Array<Product>> {
        return this.productRepository.find();
    }
}
