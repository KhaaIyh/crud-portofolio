import { type Skill } from "../../midleware/skill.api.ts";

interface SkillProps {
  skills: Skill[];
  setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
  addSkill: () => void;
}

function Skill({ skills, setSkills }: SkillProps) {
  const handleChange = (index: number, field: keyof Skill, value: string) => {
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
    </div>
  );
}

export default Skill;
