import catagories from "../catagories";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { z } from "zod";
import errorMap from "zod/locales/en.js";
import Message from "../../Message";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "it must have at least 3 character" })
    .max(50, { message: "it can hava max of 50 character" }),
  amount: z
    .number({ invalid_type_error: "Amount field is required" })
    .min(0.01)
    .max(100_000),
  catagories: z.enum(catagories, {
    errorMap: () => ({ message: "Catagories must be submitted " }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <div className="text-danger">{errors.description.message}</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <div className="text-danger">{errors.amount.message}</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="catagories" className="form-label">
          Catagory
        </label>
        <select
          {...register("catagories")}
          id="catagories"
          className="form-select"
        >
          <option value=""></option>
          {catagories.map((catagories) => (
            <option key={catagories} value={catagories}>
              {catagories}
            </option>
          ))}
        </select>
        {errors.catagories && (
          <div className="text-danger">{errors.catagories.message}</div>
        )}
      </div>
      <button className="btn btn-primary">submit</button>
    </form>
  );
};

export default ExpenseForm;
