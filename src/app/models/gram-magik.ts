import { Profil } from "./profil";


        /**représente un gramMagik d'un user */
export class GramMagik {
    filter(arg0: (x: any) => boolean) {
      throw new Error('Method not implemented.');
    }
    id!: number;
    imageAs64!: string;
    urlImg!: string;
    titre!: string;
    urlSelfie!: any;
    profil!: Profil;

    constructor(){
        this.profil = new Profil();
    }
}
