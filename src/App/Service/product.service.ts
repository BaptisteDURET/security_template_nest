import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from 'src/Domain/Business/Product/CreateProduct.dto';
import { Product } from 'src/Domain/Model/Product.entity';
import { Repository } from 'typeorm';
import { CategoryService } from './category.service';
import { Category } from 'src/Domain/Model/Category.entity';

export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        private readonly categoryService: CategoryService,
    ) {}

    findAll(): Promise<Array<Product>> {
        return this.productRepository.find();
    }

    create(data: CreateProductDto) {
        let categories: Category[] = [];
        data.categories.forEach(async function (category: string) {
            categories[category] = await this.categoryService.findOne(category);
        });
        this.categoryService.findOne()
        const product = new Product(data.name, data.description, data.price);
    }
}
