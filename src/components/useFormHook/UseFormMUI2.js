import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@mui/material";

const fields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    validation: { required: "Name is required" },
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        message: "Invalid email address",
      },
    },
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    validation: { required: "Age is required" },
  },
  {
    name: "mobile",
    label: "Mobile",
    type: "text",
    validation: { required: "Mobile is required" },
  },
  {
    name: "area",
    label: "Area",
    type: "text",
    validation: { required: "Area is required" },
  },
];
const UseFormMUI2 = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      age: "",
      mobile: "",
      area: "",
    },
  });
  const onSubmit = (data) => {
    console.log("data: ", data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <div key={field.name}>
          <Controller
            name={field.name}
            control={control}
            rules={field.validation}
            render={({ field: controllerField }) => (
              <TextField
                {...controllerField}
                label={field.label}
                variant="outlined"
                type={field.type}
                error={Boolean(errors[field.name])}
                helperText={errors[field.name]?.message}
              />
            )}
          />
        </div>
      ))}
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default UseFormMUI2;
