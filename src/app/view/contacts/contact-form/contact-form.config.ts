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
    name: 'State/Providence',
    key: 'state',
    placeholder: 'Ex. Michigan',
    type: 'text',
    value: '',
    state: '',
    autocomplete: [ 'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming' ],
    validation: {
      required: true,
    },
  },
  {
    name: 'Postal Code',
    key: 'zipCode',
    placeholder: 'Ex. 54321',
    type: 'number',
    value: '',
    state: '',
    validation: {
      required: true,
      minLength: 5,
      maxLength: 5,
      numbersOnly: true,
    },
  },
];
