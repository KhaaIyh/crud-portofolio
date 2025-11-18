import { Link } from "react-router-dom";

type ButtonProps = {
  resetForm: () => void;
};

function Button({ resetForm }: ButtonProps) {
  return (
    <div className="bg-slate-200 text-black py-10 px-96 flex justify-center items-center gap-4">
      <Link
        to={"/"}
        className="font-bold text-xl px-6 py-2 rounded-md bg-white hover:bg-slate-800 hover:text-white w-40 text-center shadow-xl"
      >
        Back
      </Link>

      <button
        type="button"
        onClick={resetForm}
        className="font-bold text-xl px-6 py-2 rounded-md bg-white hover:bg-slate-800 hover:text-white w-40 text-center shadow-xl"
      >
        Reset
      </button>

      <button
        type="submit"
        className="font-bold text-xl px-6 py-2 rounded-md bg-white hover:bg-slate-800 hover:text-white w-40 text-center shadow-xl"
      >
        Submit
      </button>
    </div>
  );
}

export default Button;
