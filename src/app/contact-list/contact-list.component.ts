import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Contact } from './contact';
import { ContactService } from './contact.service'


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  child_name: string;
  parent_name: string = "LocalHost:4200"
  title = "List of Contacts";
  work_contacts: Contact[];
  family_contacts: Contact[];
  social_contacts: Contact[];
  others_contacts: Contact[];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService,
  ) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   // this.name = params['name'];
    //   console.log(params)
    // })
    this.generateContacts()
    this.child_name = this.router.url;
    this.updateContacts()
  }

  generateContacts(){
    this.contactService.getWorkContacts()
      .subscribe(wcontacts => this.work_contacts = wcontacts);
    
    this.contactService.getSocialContacts()
      .subscribe(scontacts => this.social_contacts = scontacts);
    
    this.contactService.getFamilyContacts()
      .subscribe(fcontacts => this.family_contacts = fcontacts);

    this.contactService.getOthersContacts()
      .subscribe(ocontacts => this.others_contacts = ocontacts)
  }

  updateContacts(){
    this.contactService.contactData$
      .subscribe((contact:any) => {
        if (contact.category === "work"){
          this.work_contacts.push(contact);
        } else if (contact.category === "social"){
          this.social_contacts.push(contact);
        }else if (contact.category === "family"){
          this.family_contacts.push(contact);
        }else if (contact.category === "others"){
          this.others_contacts.push(contact);
        }
      }
      )
  }
}
