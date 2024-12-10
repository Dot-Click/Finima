import {
  Button,
  Divider,
  Image,
  NumberInput,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  updateEmployee,
  getEmployee,
} from "../../redux/slices/employee/thunks";
import { useEffect } from "react";

const AddEmployee = ({ data, close, filter }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state?.employee);
  console.log(data);

  const form = useForm({
    initialValues: {
      image: "",
      imageUrl: "",
      name: data?.name || "",
      email: data?.email || "",
      password: data?.password ? "******" : "",
      workingHours: data?.workingHours || "",
      hourlyRate: data?.hourlyRate || "",
      position: data?.position || "",
      category: data?.category || "",
    },

    validate: {
      name: (value) => (value?.length < 2 ? "Enter employee name" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        !value ? "Password must contain 8 characters" : null,
      hourlyRate: (value) => (!value ? "Enter hourly rate" : null),
      position: (value) => (!value ? "Select position" : null),
      category: (value) => (!value ? "Select Category" : null),
      workingHours: (value) => (!value ? "Enter working hours" : null),
    },
  });

  // useEffect(() => {
  //   form.setValues({
  //     name: data?.name,
  //   });
  // }, []);

  const selectImage = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const profileFile = URL.createObjectURL(file);
      form.setValues({
        image: file,
        imageUrl: profileFile,
      });
    }
  };

  const handleSubmit = async (values) => {
    let res;
    if (data?._id) {
      const payload = {
        id: data?._id,
        name: values?.name,
        email: values?.email,
        hourlyRate: values?.hourlyRate,
        position: values?.position,
        workingHours: values?.workingHours,
        category: values?.category,
      };
      res = await dispatch(updateEmployee(payload));
    } else {
      const data = {
        name: values?.name,
        email: values?.email,
        password: values?.password,
        hourlyRate: values?.hourlyRate,
        workingHours: values?.workingHours,
        position: values?.position,
        category: values?.category,
      };
      res = await dispatch(addEmployee(data));
    }

    if (!res?.error?.message) {
      await dispatch(getEmployee(filter));
      close();
    }
  };

  return (
    <div>
      <div className="p-6 bg-[#FFFEF9] border-b border-[#E9E0C380]">
        <p className="text-2xl font-semibold font-outfit text-zinc-800">
          {data?.name ? "Edit" : "Add"} Employee
        </p>
        <p className="text-sm text-slate-400 font-outfit font-thin">
          Enter employee details for easy tracking.
        </p>
      </div>
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className="py-4 h-full overflow-auto flex flex-col gap-6"
      >
        <div className="px-10 flex flex-col gap-4">
          <label htmlFor="image-input" className="flex w-16 rounded-full  ">
            <div className="p-1 bg-slate-100 flex w-auto justify-start rounded-full border border-[#AC9475] cursor-pointer">
              {form?.values?.imageUrl ? (
                <Image
                  alt="profile"
                  src={form?.values?.imageUrl}
                  className="aspect-square object-contain !rounded-full"
                />
              ) : (
                <svg
                  className="m-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="none"
                  viewBox="0 0 36 33"
                >
                  <path
                    stroke="#AC9475"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.579"
                    d="M33.806 18.333v-7.737A8.596 8.596 0 0 0 25.21 2H10.596A8.596 8.596 0 0 0 2 10.596v12.035a8.596 8.596 0 0 0 8.596 8.596H21.36"
                  ></path>
                  <path
                    stroke="#AC9475"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.579"
                    d="m2.447 25.21 4.71-5.501a3.78 3.78 0 0 1 4.763-.465 3.78 3.78 0 0 0 4.762-.464l4.006-4.006a6.88 6.88 0 0 1 8.871-.739l4.247 3.284m-22.763-3.851a2.855 2.855 0 0 0 1.059-5.498 2.854 2.854 0 1 0-1.06 5.498"
                  ></path>
                  <path
                    stroke="#AC9475"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2.579"
                    d="M29.434 21.772v8.596"
                  ></path>
                  <path
                    stroke="#AC9475"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.579"
                    d="m33.376 25.39-3.382-3.382a.793.793 0 0 0-1.12 0l-3.382 3.382"
                  ></path>
                </svg>
              )}
            </div>
            <input
              id="image-input"
              className="hidden"
              type="file"
              accept="image/*"
              onChange={selectImage}
            />
          </label>

          <TextInput
            label="Employee Name"
            placeholder="Enter Employee Name"
            {...form.getInputProps("name")}
          />
          <TextInput
            readOnly={data?.email && true}
            disabled={data?.email && true}
            label="Email"
            placeholder="Enter Email"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            readOnly={data?.password && true}
            disabled={data?.password && true}
            label="Password"
            placeholder="Enter Password"
            {...form.getInputProps("password")}
          />
          <Select
            label="Position"
            placeholder="Select Position"
            rightSection={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="7"
                fill="none"
                viewBox="0 0 10 7"
              >
                <path
                  fill="#636363"
                  d="M4.375 6.357a.87.87 0 0 0 1.25 0l3.768-3.875a.896.896 0 0 0-1.285-1.25L5 4.428 1.892 1.232a.896.896 0 0 0-1.285 1.25z"
                ></path>
              </svg>
            }
            data={["Plumber", "Carpenter", "Mechanic"]}
            {...form.getInputProps("position")}
          />
          <Select
            label="Category"
            placeholder="Select Category"
            rightSection={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="7"
                fill="none"
                viewBox="0 0 10 7"
              >
                <path
                  fill="#636363"
                  d="M4.375 6.357a.87.87 0 0 0 1.25 0l3.768-3.875a.896.896 0 0 0-1.285-1.25L5 4.428 1.892 1.232a.896.896 0 0 0-1.285 1.25z"
                ></path>
              </svg>
            }
            data={[
              { value: "contract base", label: "Contact Base" },
              { value: "hourly rate", label: "Hourly Tabs" },
              { value: "full time", label: "Full Time Employee" },
            ]}
            {...form.getInputProps("category")}
          />
          <NumberInput
            hideControls
            leftSection={
              <div className="bg-slate-200 p-2 rounded-lg">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="16"
                  fill="none"
                  viewBox="0 0 11 21"
                >
                  <path
                    fill="#2C2C2F"
                    d="M5.38 18.22q-1.672 0-2.926-.66-1.232-.66-2.2-1.914L1.64 14.26q.705.99 1.628 1.562.924.572 2.178.572 1.342 0 2.156-.616.836-.616.836-1.716 0-.858-.396-1.386a2.9 2.9 0 0 0-1.056-.858 9.4 9.4 0 0 0-1.452-.616 70 70 0 0 1-1.584-.594 8 8 0 0 1-1.43-.792 3.5 3.5 0 0 1-1.056-1.254q-.396-.77-.396-1.936 0-1.298.616-2.2A4.06 4.06 0 0 1 3.4 3.018q1.078-.506 2.42-.506 1.386 0 2.53.594a5.5 5.5 0 0 1 1.892 1.518L8.856 6.01q-.682-.792-1.43-1.232a3.2 3.2 0 0 0-1.65-.44q-1.275 0-2.002.55t-.726 1.606q0 .77.396 1.254.418.462 1.078.792.683.33 1.452.616.792.264 1.584.594.814.33 1.474.836.66.505 1.056 1.32.418.792.418 2.002 0 2.024-1.386 3.168T5.38 18.22m-.308 1.98V.532h1.452V20.2z"
                  ></path>
                </svg>
              </div>
            }
            label={
              form?.values?.category === "contract base"
                ? "Contract Base Salary"
                : form?.values?.category === "hourly rate"
                ? "Hourly Rate"
                : "Full time Salary"
            }
            placeholder="00"
            {...form.getInputProps("hourlyRate")}
          />
          <NumberInput
            hideControls
            label={"Working Hours (weekly)"}
            placeholder="00"
            {...form.getInputProps("workingHours")}
          />
        </div>
        <Divider />
        <div className="px-10 flex justify-center gap-4">
          <Button size="md" variant="outline" w={"100%"} onClick={close}>
            <p className="text-zinc-900 font-outfit">Cancel</p>
          </Button>
          <Button loading={loading} type="submit" size="md" w={"100%"}>
            Add & Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
