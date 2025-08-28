import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/Domain/Model/Category.entity';
import { Product } from 'src/Domain/Model/Product.entity';
import { CategoryService } from '../Service/category.service';
import { ProductService } from '../Service/product.service';

@Module({
    imports: [TypeOrmModule.forFeature([Category, Product])],
    controllers: [],
    providers: [CategoryService, ProductService],
})
export class ProductModule {}
