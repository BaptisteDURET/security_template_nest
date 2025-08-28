import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './Product.entity';

@Entity('category')
export class Category {
    /**
     * Uuid de la catégorie.
     */
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column('varchar', {
        nullable: false,
        length: 50,
    })
    label: string;

    @ManyToMany(() => Product, (product) => product.categories)
    @JoinTable({
        name: 'product_category',
    })
    products: Array<Product>;
}
