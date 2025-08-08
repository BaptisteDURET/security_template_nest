import Roles from 'src/Utils/types/Roles';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
    /**
     * Uuid de l'utilisateur.
     */
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    /**
     * Identifiant de l'utilisateur.
     */
    @Column('varchar', {
        nullable: false,
        length: 100,
    })
    username: string;

    /**
     * Mot de passe de l'utilisateur.
     */
    @Column('varchar', {
        nullable: false,
        length: 200,
    })
    password: string;

    /**
     * Roles de l'utilisateur.
     */
    @Column('json')
    roles: Array<string> = [];

    constructor(username: string, password: string, roles: Array<Roles>) {
        this.username = username;
        this.password = password;
        this.roles = roles;
    }
}
