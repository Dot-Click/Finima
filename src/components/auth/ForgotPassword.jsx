import { Button, TextInput } from "@mantine/core";
import { AtSign, Undo2 } from "lucide-react";
import { useForm } from "@mantine/form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/slices/auth/thunks";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { email: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  const handleSubmit = async (values) => {
    const res = await dispatch(forgotPassword(values));

    if (res?.payload?.success) {
      navigate(`/verify-email/${values?.email}`);
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
          Forgot Password!
        </p>
        <p className="text-sm sm:text-md md:text-lg text-center font-outfit">
          Enter email here , We send you the verification code
        </p>
      </div>

      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className="flex flex-col gap-6"
      >
        <TextInput
          label="Email"
          placeholder="Enter Email"
          className="font-outfit"
          size="md"
          leftSection={<AtSign strokeWidth="1.5" size={20} color="#cecdcb" />}
          // key={form.key("email")}
          {...form.getInputProps("email")}
        />

        <Button type="submit" size="lg" mt={"xl"} fullWidth>
          Send Code
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
