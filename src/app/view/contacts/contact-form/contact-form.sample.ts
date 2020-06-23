import { ValidatorFn } from '@angular/forms';
export const CONTACT_SAMPLE_FORM_DATA = [
  {
    value: 'Quicken Loans',
    state: 'VALID',
    config: {
      name: 'Company',
      id: 'company',
      placeholder: 'Ex. Google Inc.',
      validation: {
        required: true,
      },
    },
  },
  {
    value: 'John',
    state: 'VALID',
    config: {
      name: 'First Name',
      id: 'firstName',
      placeholder: 'Ex. John',
      validation: {
        required: true,
      },
    },
  },
  {
    value: 'Doe',
    state: 'VALID',
    config: {
      name: 'Last Name',
      id: 'lastName',
      placeholder: 'Ex. Doe',
      validation: {
        required: true,
      },
    },
  },
  {
    value: '3135551212',
    state: 'VALID',
    config: {
      name: 'Phone Number',
      id: 'phone',
      placeholder: 'Ex. 313-555-1212',
      format: 'phone',
      validation: {
        required: true,
      },
    },
  },
  {
    value: 'joe@ql.com',
    state: 'VALID',
    config: {
      name: 'Email Address',
      id: 'email',
      placeholder: 'Ex. joe@ql.com',
      format: 'email',
      validation: {
        required: true,
      },
    },
  },
  {
    value: '1234 Easy Street',
    state: 'VALID',
    config: {
      name: 'Address',
      id: 'address',
      placeholder: 'Ex. 1234 Easy Street',
      validation: {
        required: true,
      },
    },
  },
  {
    value: '',
    state: '',
    config: {
      name: 'Address 2',
      id: 'address2',
      placeholder: 'Unit #67',
      value: '',
      validation: {
        required: true,
      },
    },
  },
  {
    value: 'Detroit',
    state: 'VALID',
    config: {
      name: 'City',
      id: 'city',
      placeholder: 'Ex. Detroit',
      validation: {
        required: true,
      },
    },
  },
  {
    value: 'Michigan',
    state: 'VALID',
    config: {
      name: 'State',
      id: 'state',
      placeholder: 'Ex. Michigan',
      validation: {
        required: true,
      },
    },
  },
  {
    value: '12345',
    state: 'VALID',
    config: {
      name: 'Postal Code',
      id: 'zipCode',
      placeholder: 'Ex. 54321',
      format: 'number',
      validation: {
        required: true,
        minLength: 5,
        maxLength: 5,
        numbersOnly: true,
      },
    },
  },
];

export const CONTACT_SAMPLE_SERIALIZATION = `{
  "company": "Quicken Loans",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "3135551212",
  "email": "joe@ql.com",
  "address": "1234 Easy Street, Detroit, Michigan, 12345"
}`;

export const CONTACT_SAMPLE_IFORMCONTACT = {
  company: 'Quicken Loans',
  firstName: 'John',
  lastName: 'Doe',
  phone: '3135551212',
  email: 'joe@ql.com',
  address: '1234 Easy Street',
  address2: '',
  city: 'Detroit',
  state: 'Michigan',
  zipCode: '12345',
};

export const CONTACT_SAMPLE_FORM_PAYLOAD = {
  company: 'Quicken Loans',
  firstName: 'John',
  lastName: 'Doe',
  phone: '3135551212',
  email: 'joe@ql.com',
  address: '1234 Easy Street, Detroit, Michigan, 12345',
};

export const CONTACT_SAMPLE_IFORMCONTACT2 = {
  company: 'Quicken Loans',
  firstName: 'John',
  lastName: 'Doe',
  phone: '3135551212',
  email: 'joe@ql.com',
  address: '1234 Easy Street',
  address2: 'Unit #3',
  city: 'Detroit',
  state: 'Michigan',
  zipCode: '12345',
};

export const CONTACT_SAMPLE_FORM_PAYLOAD2 = {
  company: 'Quicken Loans',
  firstName: 'John',
  lastName: 'Doe',
  phone: '3135551212',
  email: 'joe@ql.com',
  address: '1234 Easy Street, Unit #3, Detroit, Michigan, 12345',
};

export const CONTACT_SAMPLE_EMPTY_SERIALIZATION = `{
  "company": "",
  "firstName": "",
  "lastName": "",
  "phone": "",
  "email": "",
  "address": ", , , "
}`;

export const CONTACT_SAMPLE_EMPTY_DETESTMENT_ARRAY = [
  { key: 'company', state: '' },
  { key: 'firstName', state: '' },
  { key: 'lastName', state: '' },
  { key: 'phone', state: '' },
  { key: 'email', state: '' },
  { key: 'address', state: '' },
  { key: 'address2', state: '' },
  { key: 'city', state: '' },
  { key: 'state', state: '' },
  { key: 'zipCode', state: '' },
];
