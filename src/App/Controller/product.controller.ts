import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ProductService } from '../Service/product.service';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { CreateProductDto } from 'src/Domain/Business/Product/CreateProduct.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async getAllProducts() {
        return await this.productService.findAll();
    }

    @Post()
    @UseInterceptors(AnyFilesInterceptor())
    async createProduct(@Body() body: CreateProductDto) {
        return await this.productService.create(body);
    }
}
