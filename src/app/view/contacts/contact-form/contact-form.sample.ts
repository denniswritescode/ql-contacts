export const CONTACT_SAMPLE_FORM_DATA = [
  {
    name: 'Company',
    key: 'company',
    placeholder: 'Ex. Google Inc.',
    type: 'text',
    value: 'Quicken Loans',
    state: 'VALID',
    validation: {
      required: true,
    },
  },
  {
    name: 'First Name',
    key: 'firstName',
    placeholder: 'Ex. John',
    value: 'John',
    state: 'VALID',
    validation: {
      required: true,
    },
  },
  {
    name: 'Last Name',
    key: 'lastName',
    placeholder: 'Ex. Doe',
    value: 'Doe',
    state: 'VALID',
    validation: {
      required: true,
    },
  },
  {
    name: 'Phone Number',
    key: 'phone',
    placeholder: 'Ex. 313-555-1212',
    type: 'phone',
    value: '3135551212',
    state: 'VALID',
    validation: {
      required: true,
    },
  },
  {
    name: 'Email Address',
    key: 'email',
    placeholder: 'Ex. joe@ql.com',
    type: 'email',
    value: 'joe@ql.com',
    state: 'VALID',
    validation: {
      required: true,
    },
  },
  {
    name: 'Address',
    key: 'address',
    placeholder: 'Ex. 1234 Easy Street',
    type: 'text',
    value: '1234 Easy Street',
    state: 'VALID',
    validation: {
      required: true,
    },
  },
  {
    name: 'Address 2',
    key: 'address2',
    placeholder: 'Unit #67',
    type: 'text',
    value: '',
    state: '',
    validation: {
      required: false,
    },
  },
  {
    name: 'City',
    key: 'city',
    placeholder: 'Ex. Detroit',
    type: 'text',
    value: 'Detroit',
    state: 'VALID',
    validation: {
      required: true,
    },
  },
  {
    name: 'State',
    key: 'state',
    placeholder: 'Ex. Michigan',
    type: 'text',
    value: 'Michigan',
    state: 'VALID',
    validation: {
      required: true,
    },
  },
  {
    name: 'Postal Code',
    key: 'zipCode',
    placeholder: 'Ex. 54321',
    type: 'number',
    value: '12345',
    state: 'VALID',
    validation: {
      required: true,
      minLength: 5,
      maxLength: 5,
      numbersOnly: true,
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
