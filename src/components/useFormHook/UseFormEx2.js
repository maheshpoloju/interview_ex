import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

const UseFormEx2 = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      users: [{ name: '', email: '' }], // default array with a single user object
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'users', // name of the field array in the form state
  });

  const onSubmit = (data) => {
    console.log('data: ', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <div>
            <label htmlFor={`users[${index}].name`}>Name:</label>
            <input
              id={`users[${index}].name`}
              {...register(`users.${index}.name`, {
                required: 'Name is required',
              })}
            />
            {errors.users?.[index]?.name && <p>{errors.users[index].name.message}</p>}
          </div>

          <div>
            <label htmlFor={`users[${index}].email`}>Email:</label>
            <input
              id={`users[${index}].email`}
              type="email"
              {...register(`users.${index}.email`, {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.users?.[index]?.email && <p>{errors.users[index].email.message}</p>}
          </div>

          <button type="button" onClick={() => remove(index)}>
            Remove User
          </button>
        </div>
      ))}

      <button type="button" onClick={() => append({ name: '', email: '' })}>
        Add User
      </button>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UseFormEx2;
