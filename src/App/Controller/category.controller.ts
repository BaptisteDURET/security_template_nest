import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpCode,
    Param,
    Post,
    UseInterceptors,
} from '@nestjs/common';
import { CategoryService } from '../Service/category.service';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { CreateCategoryDto } from 'src/Domain/Business/Category/CreateCategoryDto';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    getAllCategories() {
        return this.categoryService.findAll();
    }

    @Post()
    @HttpCode(201)
    @UseInterceptors(AnyFilesInterceptor())
    async createCategory(@Body() body: CreateCategoryDto) {
        return await this.categoryService.create(body);
    }

    @Get(':uuid/product')
    async getAllProductFromCategory(@Param('uuid') category: string) {
        try {
            return (
                (await this.categoryService.findOne(category)).products ?? []
            );
        } catch (e) {
            throw new BadRequestException();
        }
    }
}
