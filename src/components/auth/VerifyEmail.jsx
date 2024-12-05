import { Button, PinInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { AtSign, Undo2 } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { email } = useParams();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { otp: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      otp: (value) =>
        value?.trim()?.length < 6
          ? "Invalid Code , it should be of 6 digits "
          : null,
    },
  });
  const handleSubmit = async (values) => {
    navigate(`/reset-password/${email}/${values?.otp}`);
  };
  return (
    <div className="w-4/5 md:w-3/5 lg:w-4/5 xl:w-3/6 flex flex-col gap-10">
      <div>
        <Link to={-1} className="flex w-20 gap-2 mb-6">
          <Undo2 strokeWidth="1.5" size={20} />
          Back
        </Link>
        <p className="text-4xl sm:text-6xl font-outfit font-medium text-zinc-800 text-center">
          Verify Email!
        </p>
        <p className="text-sm sm:text-md md:text-lg text-center font-outfit">
          Enter verification code here
        </p>
      </div>

      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className="flex flex-col  items-center gap-6"
      >
        <PinInput
          className="font-outfit"
          placeholder="0"
          size="md"
          length={6}
          leftSection={<AtSign strokeWidth="1.5" size={20} color="#cecdcb" />}
          // key={form.key("email")}
          {...form.getInputProps("otp")}
        />

        <Button type="submit" size="lg" mt={"xl"} fullWidth>
          Verify Email
        </Button>
      </form>
    </div>
  );
};

export default VerifyEmail;
