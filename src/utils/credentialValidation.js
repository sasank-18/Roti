const credentialValidation = (email, password, phone) => {
  let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let mobileNumberRegex = /\d{5}([- ]*)\d{6}/  ;
  let phoneNumberRegex =/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/

  if (!emailRegex.test(email)) return "InValid Email address";


 if (phone && !mobileNumberRegex.test(phone)) {
    if (!phoneNumberRegex.test(phone)) {
        return "InValid Phone number";
      }
  }  

  if (!passwordRegex.test(password)) return "Password is Incorrect";
  return null;
};

export default credentialValidation;
