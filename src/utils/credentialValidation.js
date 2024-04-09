
const credentialValidation = (email, password) => {
  
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!emailRegex.test(email)) return "InValid Email address";
    if(!passwordRegex.test(password)) return "Password is Incorrect" ;
    return null;
}

export default credentialValidation