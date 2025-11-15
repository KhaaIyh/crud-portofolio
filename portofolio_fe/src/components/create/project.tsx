// function Project() {
//   return (
//     <>
//       <div className="bg-white text-black py-10 px-96 flex flex-col justify-center items-center gap-4">
//         <h1 className="font-bold text-4xl">Your Project</h1>

//         <div>
//           <div className="flex justify-between gap-4">
//             <div>
//               <label className="font-bold">Project name</label>
//               <input
//                 type="text"
//                 className="bg-slate-200 w-full rounded-md p-2 shadow-xl"
//               />
//             </div>

//             <div>
//               <label className="font-bold">Photo</label>
//               <input type="file" accept="image/*" className="w-full" />
//             </div>
//           </div>

//           <div>
//             <label className="font-bold">Project description</label>
//             <textarea className="bg-slate-200 w-full rounded-md p-2 shadow-xl"></textarea>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Project;

type ProjectItem = {
  nama_project: string;
  foto_project: File | null;
  desk_project: string;
};

interface ProjectProps {
  projects: ProjectItem[];
  setProjects: React.Dispatch<React.SetStateAction<ProjectItem[]>>;
  addProject: () => void;
}

function Project({ projects, setProjects, addProject }: ProjectProps) {
  const handleChange = (
    index: number,
    field: keyof ProjectItem,
    value: string | File | null
  ) => {
    const updated = [...projects];
    updated[index][field] = value as never;
    setProjects(updated);
  };

  return (
    <div className="bg-slate-200 py-10 px-96 flex flex-col gap-4">
      <h1 className="font-bold text-4xl text-center">Your Project</h1>

      {projects.map((item, i) => (
        <div key={i}>
          <div className="flex gap-4">
            <div>
              <label className="font-bold">Project name</label>
              <input
                type="text"
                value={item.nama_project}
                onChange={(e) =>
                  handleChange(i, "nama_project", e.target.value)
                }
                className="w-full rounded-md p-2 shadow-xl"
                required
              />
            </div>

            <div>
              <label className="font-bold">Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleChange(
                    i,
                    "foto_project",
                    e.target.files ? e.target.files[0] : null
                  )
                }
                className="w-full"
              />
            </div>
          </div>

          <label className="font-bold mt-2 block">Project description</label>
          <textarea
            value={item.desk_project}
            onChange={(e) => handleChange(i, "desk_project", e.target.value)}
            className="w-full rounded-md p-2 shadow-xl"
            required
          ></textarea>
        </div>
      ))}

      <button
        type="button"
        onClick={addProject}
        className="px-4 py-2 bg-slate-500 text-white rounded-md mt-2"
      >
        Add more Project
      </button>
    </div>
  );
}

export default Project;
