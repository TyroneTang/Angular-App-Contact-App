import { Contact } from './contact';

export const WORK_CONTACTS: Contact[] = [
  {firstName: 'Dr Nice', lastName: "ABC", email: "drnice@email.com", phone: 12345678, category: "work" },
  {firstName: 'Narco', lastName: "Hart", email: "NHart@email.com", phone: 55679908, category: "work"  },
];

export const SOCIAL_CONTACTS: Contact[] = [
  {firstName: 'Bombasto', lastName: "Lee", email: "bombLee@email.com", phone: 12312346, category: "social"  },
  {firstName: 'Celest', lastName: "Migal", email: "celeritas@email.com", phone: 88907765, category: "social"  },
  {firstName: 'Karen', lastName: "Hol", email: "KaHol@email.com", phone: 99701154, category: "social"  },
];

export const FAMILY_CONTACTS: Contact[] = [
  {firstName: 'Mother', lastName: "A", email: "mother.A@email.com", phone: 55641132, category: "family"  },
  {firstName: 'Son', lastName: "A", email: "Son.A@email.com", phone: 55657890, category: "family"  },
  {firstName: 'Daughter', lastName: "A", email: "Daughter.A@email.com", phone: 55658553, category: "family"  },
];

export const OTHERS_CONTACTS: Contact[] = [
  {firstName: 'Darren', lastName: "Lester", email: "d.lester@email.com", phone: 55146798, category: "others"  },
  {firstName: 'Ocean', lastName: "Mary", email: "Mary@email.com", phone: 11457790, category: "others"  }
];