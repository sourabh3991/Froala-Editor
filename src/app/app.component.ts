import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {}
  handleKeyPress(e) {
    setTimeout(() => {
      console.log('Dsdsd');
    }, 1000);

    console.log('fdds');
  }
  title = 'Froala';
  editorContent = 'test';
}
