import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link, useNavigate } from "react-router-dom";
import { CircleUser, Lock } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "admin@gmail.com",
      password: "admin123",
      rememberMe: false,
    },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value?.trim()?.length < 8 ? "Invalid Password " : null,
    },
  });
  return (
    <div className="w-4/5 md:w-3/5 lg:w-4/5 xl:w-3/6 flex flex-col gap-10">
      <div>
        <p className="text-4xl sm:text-6xl font-outfit font-medium text-zinc-800 text-center">
          Welcome Back
        </p>
        <p className="text-sm sm:text-md md:text-lg text-center font-outfit">
          Please enter your details to sign.
        </p>
      </div>

      <form
        onSubmit={form.onSubmit(() =>
          navigate("/dashboard/employee-management")
        )}
        className="flex flex-col gap-6"
      >
        <TextInput
          label="Username or Email"
          placeholder="Username or Email"
          className="font-outfit"
          size="md"
          leftSection={
            <CircleUser strokeWidth="1.5" size={20} color="#cecdcb" />
          }
          // key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          placeholder="Password"
          className="font-outfit"
          size="md"
          rightSection={
            <div className="bg-[#FAF5E4] p-2 px-3 rounded-lg me-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="19"
                fill="none"
                viewBox="0 0 12 19"
              >
                <path
                  fill="#999791"
                  d="M5.069 9.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-.988 0-1.682.438-2.158 1.013-.52.629-1.356 1.056-2.108.74-.674-.284-1.03-1.05-.657-1.68C2.018 1.199 3.716 0 5.99 0c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45a2.2 2.2 0 0 0-.278.789C7.425 12.342 6.828 13 6.025 13c-.796 0-1.492-.642-1.43-1.435.043-.558.165-1.158.474-1.715M7.999 17c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2"
                ></path>
              </svg>
            </div>
          }
          leftSection={<Lock strokeWidth="1.5" size={20} color="#cecdcb" />}
          // key={form.key("password")}
          {...form.getInputProps("password")}
        />

        <div className="flex justify-between items-center">
          <Checkbox label="Remember Me" {...form.getInputProps("rememberMe")} />
          <Link to={"/forgot-password"} className="font-outfit hover:underline">
            Forgot Password?
          </Link>
        </div>

        <Button type="submit" size="lg" mt={"xl"} fullWidth>
          Log In
        </Button>
      </form>
    </div>
  );
};

export default Login;
