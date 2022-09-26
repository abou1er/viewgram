// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  apis:{
    grammagik:{
      
 // url: '<<à renseigner>>'
      // url: 'https://c33fe049-4bc3-45bd-a0f5-466263f1aaa7.mock.pstmn.io/grammagik' //bdd get only


     // bdd get et post
      // url: 'https://5d287af6-927f-4b04-9f57-61111930b36e.mock.pstmn.io/grammagik'


       // bdd get et post avec urlSelfie
      //  url: 'https://938603f7-1ff5-483b-86c7-01671e95bbde.mock.pstmn.io/le-grammgik'

       // bdd get et post avec urlSelfie
       //url: 'https://938603f7-1ff5-483b-86c7-01671e95bbde.mock.pstmn.io/grammagiks'

       
       // bdd get et patch avec urlSelfie
       url: 'https://49f8c966-ea89-4ab0-982a-9662516dc64d.mock.pstmn.io/grammagiks'
    }
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
