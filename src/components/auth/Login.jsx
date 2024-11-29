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
