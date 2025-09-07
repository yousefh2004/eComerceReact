import * as yup from 'yup';
const loginschema = yup.object({
    email:yup.string().required("Email Is Required").min(3,"min length is 3"),
    password:yup.string().required("Password Is Required").min(3,"min length is 3"),
  })
export default loginschema
