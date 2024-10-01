export const formFields = [
  {
    label: "Fullname",
    type: "text",
    name: "fullname",
    placeholder: "Enter your fullname...",
    validation: {
      required: "First Name is required",
      minLength: {
        value: 2,
        message: "First Name should be at least 2 characters long",
      },
    },
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Enter your email...",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Invalid email address",
      },
    },
  },

  {
    label: "Password",
    type: "text",
    name: "password",
    placeholder: "Enter your password...",
    validation: {
      required: "Password is required",
    },
  },
  {
    label: "Phone Number",
    type: "tel",
    name: "phone",
    placeholder: "Enter your phone number...",
    validation: {
      required: "Phone Number is required",
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Phone Number should be 10 digits",
      },
    },
  },
  // {
  //   label: 'Address',
  //   type: 'text',
  //   name: 'address',
  //   placeholder: 'Enter your address',
  //   validation: {
  //     required: 'Address is required',
  //   },
  // },
  // {
  //   label: 'City',
  //   type: 'text',
  //   name: 'city',
  //   placeholder: 'Enter your city',
  //   validation: {
  //     required: 'City is required',
  //   },
  // },
];
