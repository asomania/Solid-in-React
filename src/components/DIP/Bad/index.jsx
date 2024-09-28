const CreateUser = () => {
  const handleCreateUser = async (e) => {
    try {
      const formData = new FormData(e.currentTarget);
      await axios.post("/myapi/user", formData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={handleCreateUser}>
      <input name="title" />
      <input name="name" />
      <input name="job" />
    </form>
  );
};

export default CreateUser;
