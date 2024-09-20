import React from 'react';
import { useForm } from 'react-hook-form';

const fields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    validation: { required: 'Name is required' },
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    validation: {
      required: 'Email is required',
      pattern: {
        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        message: 'Invalid email address',
      },
    },
  },
  {
    name: 'age',
    label: 'Age',
    type: 'number',
    validation: {
      required: 'Age is required',
      validate: (value) => value >= 18 || 'You must be at least 18 years old',
    },
  },
  {
    name: 'mobile',
    label: 'Mobile',
    type: 'text',
    validation: { required: 'Mobile is required' },
  },
  {
    name: 'area',
    label: 'Area',
    type: 'text',
    validation: { required: 'Area is required' },
  },
];

const UseFormEx3 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      age: '',
      mobile: '',
      area: '',
    },
  });

  const onSubmit = (data) => {
    console.log('data: ', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}:</label>
          <input id={field.name} type={field.type} {...register(field.name, field.validation)} />
          {errors[field.name] && <p>{errors[field.name].message}</p>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseFormEx3;
