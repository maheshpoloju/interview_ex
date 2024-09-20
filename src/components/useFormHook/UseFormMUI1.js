import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

const UseFormMUI1 = () => {
  const {
    control,
    handleSubmit,
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Name"
            variant="outlined"
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          />
        )}
        rules={{ required: 'Name is required' }}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            type="email"
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
        )}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
            message: 'Invalid email address',
          },
        }}
      />

      <Controller
        name="age"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Age"
            variant="outlined"
            type="number"
            error={Boolean(errors.age)}
            helperText={errors.age?.message}
          />
        )}
        rules={{ required: 'Age is required' }}
      />

      <Controller
        name="mobile"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Mobile"
            variant="outlined"
            error={Boolean(errors.mobile)}
            helperText={errors.mobile?.message}
          />
        )}
        rules={{ required: 'Mobile is required' }}
      />

      <Controller
        name="area"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Area"
            variant="outlined"
            error={Boolean(errors.area)}
            helperText={errors.area?.message}
          />
        )}
        rules={{ required: 'Area is required' }}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default UseFormMUI1;
