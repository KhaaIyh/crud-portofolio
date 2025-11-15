import { Link } from "react-router-dom";

// function Button() {
//   return (
//     <>
//       <div className="bg-slate-200 text-black py-10 px-96 flex justify-center items-center gap-4">
//         {/*
//           <p className="max-w-3xl pt-6 text-justify text-xl">
//           {user?.title || "Your title."}
//           </p>
//           <img src={user?.profile || "../assets/github.png"} alt="Your Photo" className="w-80" /> */}

//         <Link
//           to="/"
//           className="font-bold text-xl px-6 py-2 rounded-md bg-white hover:bg-slate-800 hover:text-white w-40 text-center shadow-xl"
//         >
//           {"Back"}
//         </Link>
//         <button
//           type="reset"
//           className="font-bold text-xl px-6 py-2 rounded-md bg-white hover:bg-slate-800 hover:text-white w-40 text-center shadow-xl"
//         >
//           {"Reset"}
//         </button>
//         <button
//           type="submit"
//           className="font-bold text-xl px-6 py-2 rounded-md bg-white hover:bg-slate-800 hover:text-white w-40 text-center shadow-xl"
//         >
//           {"Submit"}
//         </button>
//       </div>
//     </>
//   );
// }

// export default Button;

function Button({ resetForm }) {
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
