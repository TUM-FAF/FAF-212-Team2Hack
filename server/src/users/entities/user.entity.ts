import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    uid: string = '';

    @Column({ unique: true, length: 20})
    username: string

    @Column({ length: 20})
    password: string

    @Column({nullable: true})
    profileImage: string;


    @Column({type: "varchar", length: 20})
    firstName: string = '';

    @Column({type: "varchar", length: 20})
    lastName: string = '';

    @Column({type: "varchar", length: 50})
    description: string = '';

    @Column({type: "varchar", nullable: true})
    university: string;

    @Column({type: "varchar", nullable: true})
    school: string;

    @Column({type: "text", array: true, nullable: true})
    clubs: string[];

    @Column({type: "text", array: true, nullable: true})
    connections: string[];
}
