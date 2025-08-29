import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from 'src/Domain/Business/Category/CreateCategoryDto';
import { Category } from 'src/Domain/Model/Category.entity';
import { Repository } from 'typeorm';

export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) {}

    findOne(uuid: string): Promise<Category> {
        return this.categoryRepository.findOneByOrFail({ uuid: uuid });
    }

    findAll(): Promise<Array<Category>> {
        return this.categoryRepository.find();
    }

    create(data: CreateCategoryDto): Promise<Category> {
        const category = this.categoryRepository.create(
            new Category(data.label),
        );
        return this.categoryRepository.save(category);
    }
}
