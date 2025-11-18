import { type User } from "../../midleware/user.api.ts";

interface UserProps {
  users: User;
  setUsers: React.Dispatch<React.SetStateAction<User>>;
}

function User({ users, setUsers }: UserProps) {
  const handleChange = (field: keyof User, value: string | File | null) => {
    setUsers({
      ...users,
      [field]: value,
    });
  };

  return (
    <div className="bg-slate-200 text-black py-10 px-96 flex flex-col gap-4">
      <h1 className="font-bold text-4xl text-center">Your Data</h1>
      <div>
        <div className="flex gap-4">
          <div>
            <label className="font-bold">Name</label>
            <input
              type="text"
              value={users.nama}
              onChange={(e) => handleChange("nama", e.target.value)}
              className="w-full rounded-md p-2 shadow-xl"
              required
              autoFocus
            />

            <label className="font-bold">Title</label>
            <input
              type="text"
              value={users.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full rounded-md p-2 shadow-xl"
              required
            />

            <label className="font-bold">Email</label>
            <input
              type="email"
              value={users.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full rounded-md p-2 shadow-xl"
              required
            />

            <label className="font-bold">No HP</label>
            <input
              type="number"
              value={users.no_hp}
              onChange={(e) => handleChange("no_hp", e.target.value)}
              className="w-full rounded-md p-2 shadow-xl"
              required
            />
          </div>

          <div>
            <label className="font-bold">Github</label>
            <input
              type="url"
              value={users.github}
              onChange={(e) => handleChange("github", e.target.value)}
              className="w-full rounded-md p-2 shadow-xl"
            />

            <label className="font-bold">Instagram</label>
            <input
              type="url"
              value={users.instagram}
              onChange={(e) => handleChange("instagram", e.target.value)}
              className="w-full rounded-md p-2 shadow-xl"
            />

            <label className="font-bold">LinkedIn</label>
            <input
              type="url"
              value={users.linkedin}
              onChange={(e) => handleChange("linkedin", e.target.value)}
              className="w-full rounded-md p-2 shadow-xl"
            />

            <label className="font-bold">Photo</label>
            <input
              type="file"
              onChange={(e) =>
                handleChange(
                  "profile",
                  e.target.files ? e.target.files[0] : null
                )
              }
              accept="image/*"
              className="w-full"
              required
            />
          </div>
        </div>
        <label className="font-bold">Bio</label>
        <textarea
          value={users.bio}
          onChange={(e) => handleChange("bio", e.target.value)}
          className="w-full rounded-md p-2 shadow-xl"
          required
        ></textarea>
      </div>
    </div>
  );
}

export default User;
