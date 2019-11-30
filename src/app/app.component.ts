import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService
    ) {
    const browserLang = translate.getBrowserLang();
    const defaultLang='en';
    let languages : string[] = [defaultLang, 'da', 'fr'];
    translate.addLangs(languages);
    translate.setDefaultLang(defaultLang);    
    translate.use(browserLang);
  }
}
