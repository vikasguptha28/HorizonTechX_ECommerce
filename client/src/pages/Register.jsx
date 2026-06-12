function Register() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Register</h1>

      <input placeholder="Name" />
      <br /><br />

      <input placeholder="Email" />
      <br /><br />

      <input type="password" placeholder="Password" />
      <br /><br />

      <button>Register</button>
    </div>
  );
}

export default Register;