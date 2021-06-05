import { useInputHook } from "../hooks/useInput";
import registration from "../assets/img/registration.png";

export const LoginPage = () => {
  const _useInputHook = useInputHook;
  const [firstName, setFirstName] = _useInputHook("");
  const [lastName, setLastName] = _useInputHook("");
  const [email, setEmail] = _useInputHook("");
  const [password, setPassword] = _useInputHook("");
  const [rePassword, setRePassword] = _useInputHook("");

  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="bg-pink-300 rounded-md shadow-2xl m-4 flex justify-center items-center">
        <img className="h-2/4" src={registration} alt="art" />
      </div>
      <div className="rounded-md shadow-2xl m-4 flex justify-center items-center text-sm">
        <div className="block w-96 text-left">
          <div className="flex">
            <div className="w-1/2 mr-1">
              <label htmlFor="firstName" className="text-green-100">
                FirstName
              </label>
              <input
                name="firstName"
                className="w-full h-8 rounded-md"
                value={firstName}
                onChange={setFirstName}
              />
            </div>

            <div className="w-1/2 ml-1 mb-4">
              <label htmlFor="lastName" className="text-green-100">
                LastName
              </label>
              <input
                name="lastName"
                className="rounded-md w-full h-8"
                value={lastName}
                onChange={setLastName}
              />
            </div>
          </div>

          <label htmlFor="email" className="block text-green-100">
            Email
          </label>
          <input
            name="email"
            className="rounded-md w-full mb-4 h-8"
            value={email}
            onChange={setEmail}
          />

          <label htmlFor="password" className="block text-green-100">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="rounded-md w-full mb-4 h-8"
            value={password}
            onChange={setPassword}
          />

          <label htmlFor="rePassword" className="block text-green-100">
            Reenter Password
          </label>
          <input
            name="rePassword"
            type="password"
            className="rounded-md w-full mb-4 h-8"
            value={rePassword}
            onChange={setRePassword}
          />

          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};
