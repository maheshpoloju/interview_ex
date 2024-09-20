import { useForm } from 'react-hook-form';

const UseFormEx = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('data: ', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" {...register('name', { required: 'Name is required' })} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          {...register('age', {
            required: 'Age is required',
            validate: (value) => value >= 18 || 'You must be at least 18 years old',
          })}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UseFormEx;
