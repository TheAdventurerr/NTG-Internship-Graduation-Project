import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
 @Input() title:string = ""
 @Input() select = ""
 @Input()  data:any[] = []
 @Input()  all:boolean = true;
 @Output() selectedValue = new EventEmitter()
  constructor(){}

  ngOnInit(): void {

  }

  detectChanges(event:any){
    this.selectedValue.emit(event)
  }

}
