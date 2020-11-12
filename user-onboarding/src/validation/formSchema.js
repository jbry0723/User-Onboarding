import * as yup from 'yup';

export default yup.object().shape({
    name:yup
    .string()
    .required('Name is required.')
    .min(2, "Name must be at least 2 characters."),
    email: yup
    .string()
    .email("Must include a valid email address.")
    .required("Must include a valid email address."),
    password: yup
    .string()
    .required ('Must include a password.')
    .min (5, "Password must be at least 5 characters"),
    terms: yup.boolean()
    .oneOf([true], "Must agree to Terms")

})