import Joi from "joi-browser";
const loginSchema={
    name:Joi.string().required(),
    email:Joi.string().email().min(6).max(1024).required(),
    password:Joi.string().min(6).max(1024).required(),
};
export default loginSchema;