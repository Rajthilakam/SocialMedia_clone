const Validator = require('validator');
const isEmpty = require('./isempty');

module.exports = function validateRegisterInput(data){
  let errors = {};

  if (!Validator.isLength(data.name, {min: 3, max: 30})){
    errors.name = 'Name must be between 3 and 30 characters';
  }

  if (isEmpty(data.name)){
    errors.name = 'Name is required';
  }

  if (!Validator.isEmail(data.regemail)){
    errors.regemail = 'Email is invalid';
  }

  if (isEmpty(data.regemail)){
    errors.regemail = 'Email is required';
  }

  if (!Validator.isLength(data.regpassword, {min: 6, max: 30})){
    errors.regpassword = 'Password must be between 6 and 30 characters';
  }

  if (isEmpty(data.regpassword)){
    errors.regpassword = 'Password is required';
  }

  if (isEmpty(data.regpassword2)){
    errors.regpassword2 = 'Confirm Password is required';
  }

  if (!Validator.equals(data.regpassword, data.regpassword2)){
    errors.regpassword2 = 'Passwords must match';   
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}