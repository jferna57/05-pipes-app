import { Component, signal } from '@angular/core';
import { LowerCasePipe, UpperCasePipe, TitleCasePipe } from '@angular/common'

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  nameLower = signal('juan carlos');
  nameUpper = signal('juan carlos');
  fullName = signal('juAn caRLos');

}
