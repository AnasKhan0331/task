// import * as yup from "yup";
// export const carDetailsSchema = yup.object().shape({
//   carModel: yup.string().required("Car Model is required"),
//   carPrice: yup.string().required("Car Price is required"),
//   phone: yup.string().required("Phone is required"),
//   city: yup.string().required("City is required"),
//   numberOfImages: yup.string().required("Number of images is required"),
// });

import * as yup from "yup";

export const carDetailsSchema = yup.object().shape({
  carModel: yup
    .string()
    .max(3, "Car Model must not exceed 3 characters")
    .required("Car Model is required"),
  carPrice: yup
    .number()
    .max(11, "Car Price must not exceed 11 characters")
    .required("Car Price is required"),
  phone: yup
    .string()
    .matches(/^\d{11}$/, "Phone number must be 11 digits")
    .required("Phone is required"),
  city: yup.string().required("City is required"),
  numberOfImages: yup
    .string()
    .matches(/^[1-9]$|^10$/, "Number of images must be between 1 and 10")
    .required("Number of images is required"),
});
