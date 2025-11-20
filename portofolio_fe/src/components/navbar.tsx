import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userApi, type User } from "../midleware/user.api";
import { skillApi, type Skill } from "../midleware/skill.api";
import { certificateApi, type Certificate } from "../midleware/certificate.api";
import { projectApi, type Project } from "../midleware/project.api";

interface NavbarProps {
  selectedUserId?: string | null;
  onSelectUser?: (id: string | null) => void;
}

function Navbar({ selectedUserId, onSelectUser }: NavbarProps) {
  const navigate = useNavigate();
  const [hasData, setHasData] = useState(false);
  const [user, setUsers] = useState<User[]>([]);
  const [selected, setSelected] = useState<string | null>(selectedUserId || null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await userApi.getUser();
        const items = res.data.data.items || [];
        setUsers(items);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    const checkData = async () => {
      try {
        const userResponse = await userApi.getUser();
        const users = userResponse.data.data.items || [];

        const skillResponse = await skillApi.getSkill();
        const skills = skillResponse.data.data.items || [];

        const certificateResponse = await certificateApi.getCertificate();
        const certificates = certificateResponse.data.data.items || [];

        const projectResponse = await projectApi.getProject();
        const projects = projectResponse.data.data.items || [];

        if (
          users.length > 0 ||
          skills.length > 0 ||
          certificates.length > 0 ||
          projects.length > 0
        ) {
          setHasData(true);
        } else {
          setHasData(false);
        }
      } catch (error) {
        console.error("Error checking data:", error);
      }
    };

    fetchUsers();
    checkData();
  }, []);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete all data?")) {
      return;
    }

    try {
      const skillResponse = await skillApi.getSkill();
      const skills = (skillResponse.data.data.items as Skill[] || []).filter(
        (skill) => skill.id_user === selected
      );
      for (const skill of skills) {
        try {
          await skillApi.deleteSkill(skill.id_skill!);
        } catch (error) {
          console.error("Error deleting skill:", error);
        }
      }

      const certificateResponse = await certificateApi.getCertificate();
      const certificates = (certificateResponse.data.data.items as Certificate[] || []).filter(
        (certificate) => certificate.id_user === selected
      );
      for (const certificate of certificates) {
        try {
          await certificateApi.deleteCertificate(certificate.id_certificate!);
        } catch (error) {
          console.error("Error deleting certificate:", error);
        }
      }

      const projectResponse = await projectApi.getProject();
      const projects = (projectResponse.data.data.items as Project[] || []).filter(
        (project) => project.id_user === selected
      );
      for (const project of projects) {
        try {
          await projectApi.deleteProject(project.id_project!);
        } catch (error) {
          console.error("Error deleting project:", error);
        }
      }

      await userApi.deleteUser(selected!);
      setSelected(null);
      localStorage.removeItem("selectedUserId");
      if (onSelectUser) onSelectUser(null);
      alert("All data deleted successfully.");

      window.location.reload();
    } catch (error) {
      console.error("Error during deletion process:", error);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value || null;
    setSelected(id);
    localStorage.setItem("selectedUserId", id || "");
    if (onSelectUser) onSelectUser(id);
  };

  return (
    <>
      <nav className="bg-slate-800 text-white p-4 flex justify-around sticky top-0">
        <a href="/" className="font-bold text-xl">
          Portofolio
        </a>
        <ul className="flex gap-5">
          <li>
            <a href="#home" className="hover:text-gray-500">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#certificate" className="hover:text-gray-500">
              Certificate
            </a>
          </li>
          <li>
            <a href="#project" className="hover:text-gray-500">
              Project
            </a>
          </li>
          <li>
            <button
              onClick={() => navigate("/create")}
              className="text-cyan-300 font-bold hover:text-cyan-800"
            >
              Make your Portofolio
            </button>
          </li>
          <li>
            <select
              value={selected ?? ""}
              onChange={handleSelectChange}
              className="bg-transparent text-cyan-300 font-bold hover:text-cyan-800"
            >
              <option value="" disabled hidden className="text-gray-300">
                Select Portofolio
              </option>
              {user.map((u) => (
                <option
                  key={u.id_user}
                  value={u.id_user}
                  className="text-black"
                >
                  {u.nama}
                </option>
              ))}
            </select>
          </li>
          {hasData && (
            <li>
              <button
                onClick={() => navigate("/edit/" + selected)}
                className="text-gray-600 font-bold hover:text-cyan-800"
              >
                Edit
              </button>
            </li>
          )}
          {hasData && (
            <li>
              <button
                onClick={handleDelete}
                className="text-gray-600 font-bold hover:text-red-800"
              >
                Delete
              </button>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
