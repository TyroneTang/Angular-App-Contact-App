import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Observable, of } from 'rxjs';
import { Contact } from './contact';
import { WORK_CONTACTS, SOCIAL_CONTACTS, FAMILY_CONTACTS, OTHERS_CONTACTS } from './mock-contacts';


@Injectable({
    providedIn: 'root',
  })
  export class ContactService {
  
    private _contactDataSource = new Subject<object>();
    contactData$ = this._contactDataSource.asObservable();

    constructor() { }
  
    getWorkContacts(): Observable<Contact[]> {
        return of(WORK_CONTACTS);
    }
    getSocialContacts(): Observable<Contact[]>{
        return of(SOCIAL_CONTACTS);
    }
    getFamilyContacts(): Observable<Contact[]>{
        return of(FAMILY_CONTACTS);
    }
    getOthersContacts(): Observable<Contact[]>{
        return of(OTHERS_CONTACTS);
    }
    
    updateArray(data: object){
        this._contactDataSource.next(data)
    }

  }