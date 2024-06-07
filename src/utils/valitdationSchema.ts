import * as yup from "yup";

export const CreateUserSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is missing")
    .min(3, "Name is too short")
    .max(20, "Name is too long"),
  email: yup
    .string()
    .trim()
    .required("Email is missing")
    .email("Invalid email"),
  password: yup
    .string()
    .trim()
    .required("Password is missing")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-zA-z])(?=.*\d)(?=.*[!@#\$%^&\*])[a-zA-Z\d!@#\$%|^&\*]+$/, 
      "Pass must have the special character, alphabet and number"     
      //(?=.*[a-zA-z]) means the a -z characters can be upper or lower case 
      // (?=.*\d) means for digit(numbers)
      //(?=.*[!@#\$%^&\*]) means for speacial character                                                                        //[a-zA-Z\d!@#\$%|^&\*]+$ means for felxible position                     
    ),
});

