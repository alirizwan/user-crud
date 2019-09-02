import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Length } from "class-validator";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(2, 100)
    firstName: string;

    @Column()
    @Length(2, 100)
    lastName: string;

    @Column({
        unique: true
    })
    @Length(6, 50)
    username: string;

    @Column()
    @Length(8, 20)
    password: string;

    @Column()
    avatar: string;

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string
    
};