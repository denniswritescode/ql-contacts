import { IQLFormInput } from 'src/app/interfaces/shared.interfaces';

export const CONTACT_FORM_CONFIG: IQLFormInput[] = [
  {
    value: '',
    state: '',
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
    value: '',
    state: '',
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
    value: '',
    state: '',
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
    value: '',
    state: '',
    config: {
      name: 'Phone Number',
      id: 'phone',
      placeholder: 'Ex. 313-555-1212',
      format: 'phone',
      charCount: 10,
      validation: {
        required: true,
        minLength: 10,
        maxLength: 10,
      },
    },
  },
  {
    value: '',
    state: '',
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
    value: '',
    state: '',
    config: {
      name: 'Address',
      id: 'address',
      placeholder: 'Ex. 1234 Easy Street',
      format: 'text',
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
      placeholder: 'Ex. Unit #67',
      format: 'text',
      validation: {
        required: false,
      },
    },
  },
  {
    value: '',
    state: '',
    config: {
      name: 'City',
      id: 'city',
      placeholder: 'Ex. Detroit',
      format: 'text',
      validation: {
        required: true,
      },
    },
  },
  {
    value: '',
    state: '',
    autocomplete: [ 'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming' ],
    config: {
      name: 'State/Providence',
      id: 'state',
      placeholder: 'Ex. Michigan',
      format: 'text',
      validation: {
        required: true,
      },
    },
  },
  {
    value: '',
    state: '',
    config: {
      name: 'Postal Code',
      id: 'zipCode',
      placeholder: 'Ex. 54321',
      format: 'number',
      charCount: 5,
      validation: {
        required: true,
        minLength: 5,
        maxLength: 5,
        numbersOnly: true,
      },
    },
  },
];
