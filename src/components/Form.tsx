
import {  FieldValues, useForm} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  name: z.string().min(3, {message: "it must have at least 3 character"}),
  age: z.number({ invalid_type_error: 'Age field is required' }).min(18,{ message: 'Age must be at least 18' } ),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>

        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          age
        </label>
        <input
          {...register("age", { valueAsNumber: true  } )}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      {errors.age && <p className="text-danger">{errors.age.message}</p>}
      <button disabled={!isValid} className="btn btn-primary">submit</button>
    </form>
  );
};

export default Form;
