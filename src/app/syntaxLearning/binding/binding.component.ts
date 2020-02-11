import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  html = '<div>bound by [innerHTML] </div>';
  html2 = '<div>bound by {{ }} </div>';

  id = 'property';
  pTitle = 'property';

  constructor() { }

  ngOnInit(): void {
  }

}
