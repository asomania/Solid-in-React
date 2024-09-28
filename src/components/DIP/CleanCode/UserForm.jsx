const UserForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input name="title" />
      <input name="name" />
      <input name="job" />
    </form>
  );
};

export default UserForm;
