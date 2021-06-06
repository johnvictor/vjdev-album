import registration from "../assets/img/registration.png";
import { IRegisterState, IUser } from "../store/reducers/users";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { registerUserEffect } from "../store/effects/usersEffect";
import { useHistory } from "react-router-dom";

export const RegisterPage = () => {
  const history = useHistory();
  const { register, handleSubmit, watch, formState } = useForm();
  const dispatch = useAppDispatch();
  const password = useRef({});
  password.current = watch("password", "");
  const userState: IRegisterState = useAppSelector((state) => state).user;

  const submitRegistrationForm = async (event: IUser) => {
    delete event.rePassword;
    let result: any = await dispatch(registerUserEffect(event));
    if (!result.error) history.push("/dashboard");
  };

  const isPasswordSame = (data: string) => {
    return password.current === data || "Password doesn't match";
  };

  return (
    <div className="min-h-screen grid grid-cols-2 bg-blue-800">
      <div className="bg-pink-300 rounded-md shadow-2xl m-4 flex justify-center items-center">
        <img className="h-2/4" src={registration} alt="art" />
      </div>
      <div className="rounded-md shadow-2xl m-4 flex justify-center items-center text-sm">
        <form onSubmit={handleSubmit(submitRegistrationForm)}>
          <div className="block w-96 text-left">
            <div className="flex">
              <div className="w-1/2 mr-1">
                <label htmlFor="firstName" className="text-green-100">
                  FirstName
                </label>
                <input
                  className="w-full h-8 rounded-md"
                  {...register("firstName", { required: true, maxLength: 20 })}
                />
                <div className="text-red-500 h-4">
                  {formState.errors.firstName?.type === "required" &&
                    "First name is required"}
                </div>
              </div>

              <div className="w-1/2 ml-1 mb-4">
                <label htmlFor="lastName" className="text-green-100">
                  LastName
                </label>
                <input
                  className="rounded-md w-full h-8"
                  {...register("lastName", { required: true, maxLength: 20 })}
                />
                <div className="text-red-500 h-4">
                  {formState.errors.lastName?.type === "required" &&
                    "Last name is required"}
                </div>
              </div>
            </div>

            <label htmlFor="email" className="block text-green-100">
              Email
            </label>
            <input
              className="rounded-md w-full h-8"
              {...register("email", { required: true })}
              autoComplete="username"
            />
            <div className="text-red-500 h-4 mb-4">
              {formState.errors.email?.type === "required" &&
                "Email is required"}
              {userState.error}
            </div>

            <label htmlFor="password" className="block text-green-100">
              Password
            </label>
            <input
              {...register("password", { required: true, minLength: 1 })}
              type="password"
              autoComplete="new-password"
              className="rounded-md w-full h-8"
            />
            <div className="text-red-500 h-4 mb-4">
              {formState.errors.password?.type === "required" &&
                "Password is required"}
              {formState.errors.password?.type === "minLength" &&
                "Password should have minimum 6 characters"}
            </div>

            <label htmlFor="rePassword" className="block text-green-100">
              Reenter Password
            </label>
            <input
              {...register("rePassword", {
                required: true,
                minLength: 1,
                validate: isPasswordSame,
              })}
              type="password"
              autoComplete="new-password"
              className="rounded-md w-full h-8"
            />
            <div className="text-red-500 h-4 mb-4">
              {formState.errors.rePassword?.type === "required" &&
                "Re-enter password"}
              {formState.errors.rePassword?.type === "minLength" &&
                "Password should have minimum 6 characters"}
              {formState.errors.rePassword?.type === "validate" &&
                formState.errors.rePassword?.message}
            </div>

            <button
              className="float-right bg-transparent hover:bg-blue-500 text-blue-500 
                        font-semibold hover:text-white py-2 px-4 border border-blue-500 
                        hover:border-transparent rounded"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
