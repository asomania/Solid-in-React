import UserForm from "./UserForm";
const CreateUser = () => {
  const handleCreateUser = async (e) => {
    try {
      const formData = new UserData(e.currentTarget);
      await axios.post("/myapi/user", userData);
    } catch (err) {
      console.error(err.message);
    }
  };
  const handleUpdateUser = async (e) => {
    try {
      const formData = new UserData(e.currentTarget);
      await axios.post("/myapi/user", userData);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <UserForm onSubmit={handleCreateUser} />
      <UserForm onSubmit={handleUpdateUser} />
    </>
  );
};

export default CreateUser;
