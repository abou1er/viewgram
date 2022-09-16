import { Profil } from "./profil";


        /**représente un gramMagik d'un user */
export class GramMagik {
    id!: number;
    imageAs64!: string;
    urlImg!: string;
    titre!: string;
    profil!: Profil;

    constructor(){
        this.profil = new Profil();
    }
}
