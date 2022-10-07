import { Profil } from "./profil";


        /**représente un gramMagik d'un user */
export class GramMagik {
    find(arg0: (pick: any) => boolean) {
      throw new Error('Method not implemented.');
    }
    filter(arg0: (x: any) => boolean) {
      throw new Error('Method not implemented.');
    }
    id!: number;
    imageAs64!: string;
    urlImg!: string;
    titre!: string;
    urlSelfie!: any;
    urlSelfie2!: any;
    urlSelfie3!: any;
    profil!: Profil;
    logoHeart: boolean= false;
    logoFire:  boolean= false;
    like!: number;
    txtBtnHeart: string = 'Bientôt cool' ;

    constructor(){
        this.profil = new Profil();
    }
}
