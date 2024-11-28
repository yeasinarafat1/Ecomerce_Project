import bcrypt from "bcryptjs";
const test = async () => {
  const salt = await bcrypt.genSalt(10);
  const hasspassword = await bcrypt.hash("Hello World", salt);
  console.log(hasspassword);
};

test();
