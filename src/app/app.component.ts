import { Component } from '@angular/core';
import { GramMagik } from './models/gram-magik';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'magikGram';
  subtitle = 'Poire don\'t cry';
  logoAppli= false;
  gramMagics : GramMagik[] = [
    {urlImg:'', profil:{nom: 'poire cry', gramMagik: []}},
    {urlImg:'', profil:{nom: 'poire cryING', gramMagik: []}},
  ]
}
