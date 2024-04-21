const signUpPostApi = async () => {
  const data = await fetch(
    "https://groundbooking-cupx.onrender.com/api/SignUp",
    
    {
      method: "post",
      body: { name: "rajubhai", phoneNumber: 6589338599 },
    }
  );
  console.log(data);
  // .then(response => {
  //   console.log('Success:', response.data);
  // })
  // .catch(error => {
  //   console.error('Error:', error);
  // });
};

export default signUpPostApi;
