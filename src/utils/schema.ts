// import * as Yup from 'yup';

// interface ContactFormValues {
//   yourname: string;
//   email: string;
//   message: string;
// }

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// export const ContactFormSchema: Yup.ObjectSchema<ContactFormValues> = Yup.object().shape({
//   yourname: Yup.string().required('Please enter yourName'),
//   email: Yup.string()
//     .email('Invalid email')
//     .required('Please enter your email')
//     .matches(emailRegex, 'Invalid email'), // Replace with your email regex pattern
//   message: Yup.string().required('Please enter message'),
// });

import * as Yup from 'yup';

interface ContactFormValues {
  yourname: string;
  email: string;
  message: string;
  acceptTerms: boolean;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactFormSchema: Yup.ObjectSchema<ContactFormValues> = Yup.object().shape({
  yourname: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email')
    .matches(emailRegex, 'Invalid email'),
  message: Yup.string().required('Please enter a message'),
  acceptTerms: Yup.boolean().oneOf([true], 'You must accept the terms') as Yup.Schema<boolean>,
});
