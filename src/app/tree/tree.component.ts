import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  parent: string = "None";
  child: string = "None";


  constructor() { }

  ngOnInit(): void {
    
  }

  onOptionsSelected(value:string){
    if (value === "contact-list"){
      this.child = "/contact-list (child: Component)";
      this.parent = "LocalHost ";
    }else if (value === "contact-form"){
      this.child = "/contact-form (child: Component)";
      this.parent = "LocalHost (parent)";
    }else if (value === "tree"){
      this.child = "/tree (child: Component)";
      this.parent = "LocalHost (parent)";
    }
}

}
