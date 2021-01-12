import { Component, OnInit } from '@angular/core';
import { User } from './user-model';
import { ContactService } from '../contact-list/contact.service'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  userModel = new User('','','email@email',11111111, '');
  
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.contactService.updateArray(this.userModel);
    console.log(typeof this.userModel)
  }

}
