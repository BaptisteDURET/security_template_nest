import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/Domain/Model/Category.entity';
import { Repository } from 'typeorm';

export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) {}

    findAll(): Promise<Array<Category>> {
        return this.categoryRepository.find();
    }
}
