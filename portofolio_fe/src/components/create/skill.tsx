// function Skill() {
//   return (
//     <>
//       <div className="bg-white text-black py-10 px-96 flex flex-col justify-center items-center gap-4">
//         {/* <h1 className="font-bold text-3xl">Tentang Saya</h1>
//         <p className="pt-6 text-justify">{user?.bio || "Your Bio."}</p> */}

//         <h1 className="font-bold text-4xl">Your Skill</h1>
//         <div className="flex justify-between gap-4">
//           <div>
//             <label className="font-bold">Skill name</label>
//             <input
//               type="text"
//               className="bg-slate-200 w-full rounded-md p-2 shadow-xl"
//             />
//           </div>
//           <div>
//             <label className="font-bold">Skill description</label>
//             <textarea className="bg-slate-200 w-full rounded-md p-2 shadow-xl"></textarea>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Skill;

type SkillItem = {
  nama_skill: string;
  desk_skill: string;
};

interface SkillProps {
  skills: SkillItem[];
  setSkills: React.Dispatch<React.SetStateAction<SkillItem[]>>;
  addSkill: () => void;
}

function Skill({ skills, setSkills, addSkill }: SkillProps) {
  const handleChange = (
    index: number,
    field: keyof SkillItem,
    value: string
  ) => {
    const updated = [...skills];
    updated[index][field] = value as never;
    setSkills(updated);
  };

  return (
    <div className="bg-white py-10 px-96 flex flex-col gap-4">
      <h1 className="font-bold text-4xl text-center">Your Skill</h1>

      {skills.map((item, i) => (
        <div key={i} className="flex gap-4">
          <div>
            <label className="font-bold">Skill name</label>
            <input
              type="text"
              value={item.nama_skill}
              onChange={(e) => handleChange(i, "nama_skill", e.target.value)}
              className="bg-slate-300 w-full rounded-md p-2 shadow-xl"
              required
            />
          </div>

          <div>
            <label className="font-bold">Skill description</label>
            <textarea
              value={item.desk_skill}
              onChange={(e) => handleChange(i, "desk_skill", e.target.value)}
              className="bg-slate-300 w-full rounded-md p-2 shadow-xl"
              required
            ></textarea>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addSkill}
        className="px-4 py-2 bg-slate-500 text-white rounded-md mt-2"
      >
        Add more Skill
      </button>
    </div>
  );
}

export default Skill;
