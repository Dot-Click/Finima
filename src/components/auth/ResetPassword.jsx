import { Button, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Lock, LockKeyhole, Undo2 } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ResetPassword = () => {
  const { email, otp } = useParams();
  const { loading } = useSelector((state) => state?.auth);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    validate: {
      password: (value) =>
        value?.trim()?.length < 8 ? "Invalid Password " : null,

      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
  const handleSubmit = async () => {
    const data = {
      email,
      password,
      passwordResetToken: otp,
    };
    const res = await dispatch(forgotPassword(data));

    if (res?.payload?.success) {
      navigate(`/login`);
    }
  };
  return (
    <div className="w-4/5 md:w-3/5 lg:w-4/5 xl:w-3/6 flex flex-col gap-10">
      <div>
        <Link to={-1} className="flex w-20 gap-2 mb-6">
          <Undo2 strokeWidth="1.5" size={20} />
          Back
        </Link>
        <p className="text-4xl sm:text-6xl font-outfit font-medium text-zinc-800 text-center">
          Reset Password!
        </p>
        <p className="text-sm sm:text-md md:text-lg text-center font-outfit">
          Enter new password here to change
        </p>
      </div>

      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className="flex flex-col gap-6"
      >
        <PasswordInput
          label="Password"
          placeholder="Enter Password"
          className="font-outfit"
          size="md"
          leftSection={<Lock strokeWidth="1.5" size={20} color="#cecdcb" />}
          // key={form.key("email")}
          {...form.getInputProps("password")}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm Password"
          className="font-outfit"
          size="md"
          leftSection={
            <LockKeyhole strokeWidth="1.5" size={20} color="#cecdcb" />
          }
          // key={form.key("email")}
          {...form.getInputProps("confirmPassword")}
        />

        <Button
          loading={loading}
          loaderProps={{ type: "dots" }}
          type="submit"
          size="lg"
          mt={"xl"}
          fullWidth
        >
          Reset Password
        </Button>
      </form>
    </div>
  );
};

export default ResetPassword;
