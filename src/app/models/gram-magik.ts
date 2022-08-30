import { Profil } from "./profil";


        /**représente un gramMagik d'un user */
export class GramMagik {
    urlImg!: string;
    profil!: Profil

    constructor(){
        this.profil = new Profil();
    }
}
