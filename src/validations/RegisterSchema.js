import * as yup from 'yup';
const registerschema = yup.object({
    fullName:yup.string().required("Full Name Is Required").min(3,"min length is 3"),
    userName:yup.string().required("User Name Is Required").min(3,"min length is 3"),
    email:yup.string().required("Email Is Required").min(3,"min length is 3"),
    password:yup.string().required("Password Is Required").min(3,"min length is 3"),
    phoneNumber:yup.string().required("Phone Number Is Required").min(3,"min length is 3")
  })
export default registerschema