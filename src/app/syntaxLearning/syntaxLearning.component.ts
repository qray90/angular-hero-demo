import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syntax-learning',
  templateUrl: './syntaxLearning.component.html',
  styleUrls: ['./syntaxLearning.component.scss']
})
export class SyntaxLearningComponent implements OnInit {
  html = '<div>bound by [innerHTML] </div>';
  html2 = '<div>bound by {{ }} </div>';

  id = 'property';
  pTitle = 'property';

  constructor() { }

  ngOnInit(): void {
  }

}
