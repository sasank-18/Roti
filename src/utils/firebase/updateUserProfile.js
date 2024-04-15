import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";

const updateUserProfile = (name, phone) => {
  console.log(phone)
  updateProfile(auth.currentUser, {
    displayName: name,
    phoneNumber: phone,
    photoURL: "https://example.com/jane-q-user/profile.jpg"
  })
    .then(() => {
      alert('profileUpdated')
    })
    .catch((error) => {
      return error;
    });
};

export default updateUserProfile;
