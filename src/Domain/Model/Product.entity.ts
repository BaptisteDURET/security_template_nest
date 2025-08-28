import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './Category.entity';

@Entity('product')
export class Product {
    /**
     * Uuid du produit.
     */
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    /**
     * Nom du produit.
     */
    @Column('varchar', {
        nullable: false,
        length: 200,
    })
    name: string;

    /**
     * Description du produit.
     */
    @Column('text', {
        nullable: true,
    })
    description: string;

    /**
     * Prix du produit en centimes.
     */
    @Column('int', {
        nullable: false,
    })
    price: number;

    /**
     * Catégories du produit.
     */
    @ManyToMany(() => Category, (category) => category.products)
    @JoinTable({
        name: 'product_category',
    })
    categories: Array<Category>;
}
