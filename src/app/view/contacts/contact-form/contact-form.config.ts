import { IQLFormInput } from 'src/app/interfaces/shared.interfaces';

export const CONTACT_FORM_CONFIG: IQLFormInput[] = [
  {
    name: 'Company',
    key: 'company',
    placeholder: 'Ex. Google Inc.',
    type: 'text',
    value: '',
    state: '',
    validation: {
      required: true,
    },
  },
  {
    name: 'First Name',
    key: 'firstName',
    placeholder: 'Ex. John',
    value: '',
    state: '',
    validation: {
      required: true,
    },
  },
  {
    name: 'Last Name',
    key: 'lastName',
    placeholder: 'Ex. Doe',
    value: '',
    state: '',
    validation: {
      required: true,
    },
  },
  {
    name: 'Phone Number',
    key: 'phone',
    placeholder: 'Ex. 313-555-1212',
    type: 'phone',
    value: '',
    state: '',
    validation: {
      required: true,
    },
  },
  {
    name: 'Email Address',
    key: 'email',
    placeholder: 'Ex. joe@ql.com',
    type: 'email',
    value: '',
    state: '',
    validation: {
      required: true,
    },
  },
  {
    name: 'Address',
    key: 'address',
    placeholder: 'Ex. 1234 Easy Street',
    type: 'text',
    value: '',
    state: '',
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
    value: '',
    state: '',
    validation: {
      required: true,
    },
  },
  {
    name: 'State',
    key: 'state',
    placeholder: 'Ex. Michigan',
    type: 'text',
    value: '',
    state: '',
    validation: {
      required: true,
    },
  },
  {
    name: 'Postal Code',
    key: 'zipCode',
    placeholder: 'Ex. 54321',
    type: 'text',
    value: '',
    state: '',
    validation: {
      required: true,
    },
  },
];
