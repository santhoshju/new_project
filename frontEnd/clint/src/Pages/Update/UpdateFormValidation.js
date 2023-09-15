import { React,useState } from 'react';
import Update from './Update';

const UpdateFormValidation = () => {
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isMobileValid, setIsMobileValid] = useState(true);
    const [isDateValid, setIsDateValid] = useState(true);
    const [isAddressValid, setIsAddressValid] = useState(true);

    const validateEmail = async (email) => {
      console.log("first");
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      setIsEmailValid(emailPattern.test(email));
    };

    const validateFirstName = (firstName) => {
      const namePattern = /^[A-Za-z]+$/;
      setIsFirstNameValid(namePattern.test(firstName));
    };

    const validateLastName = (lastName) => {
      const namePattern = /^[A-Za-z]+$/;
      setIsLastNameValid(namePattern.test(lastName));
    };

    const validateMobileNumber = (mobileNumber) => {
      const numberPattern = /^\d+$/;
      setIsMobileValid(
        numberPattern.test(mobileNumber) && mobileNumber.length === 10
      );
    };

    const validateDateOfBirth = (date) => {
      const currentDate = new Date();
      const selectedDate = new Date(date);
      setIsDateValid(selectedDate <= currentDate);
    };

    const validateAddress = (address) => {
      const words = address.split(/\s+/);
      setIsAddressValid(words.length <= 10);
    };
  return (
    <div>
      <Update
        isEmailValid={isEmailValid}
        validateEmail={validateEmail}
        isFirstNameValid={isFirstNameValid}
        validateFirstName={validateFirstName}
        isLastNameValid={isLastNameValid}
        validateLastName={validateLastName}
        isMobileValid={isMobileValid}
        validateMobileNumber={validateMobileNumber}
        isDateValid={isDateValid}
        validateDateOfBirth={validateDateOfBirth}
        isAddressValid={isAddressValid}
        validateAddress={validateAddress}
      />
    </div>
  );
    

  };


export default UpdateFormValidation