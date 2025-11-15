import { useNavigate } from "react-router-dom";
import { userApi } from "../midleware/user.api";
import { skillApi } from "../midleware/skill.api";
import { certificateApi } from "../midleware/certificate.api";
import { projectApi } from "../midleware/project.api";

function Navbar() {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete all data?")) {
      return;
    }

    try {
      const userResponse = await userApi.getUser();
      const users = userResponse.data.data.items || [];

      const skillResponse = await skillApi.getSkill();
      const skills = skillResponse.data.data.items || [];

      const certificateResponse = await certificateApi.getCertificate();
      const certificates = certificateResponse.data.data.items || [];

      const projectResponse = await projectApi.getProject();
      const projects = projectResponse.data.data.items || [];

      for (const skill of skills) {
        try {
          await skillApi.deleteSkill(skill.id_skill!);
        } catch (error) {
          console.error("Error deleting skill:", error);
        }
      }

      for (const certificate of certificates) {
        try {
          await certificateApi.deleteCertificate(certificate.id_certificate!);
        } catch (error) {
          console.error("Error deleting certificate:", error);
        }
      }

      for (const project of projects) {
        try {
          await projectApi.deleteProject(project.id_project!);
        } catch (error) {
          console.error("Error deleting project:", error);
        }
      }

      for (const user of users) {
        try {
          await userApi.deleteUser(user.id_user!);
        } catch (error) {
          console.error("Error deleting user:", error);
        }
      }

      window.location.reload();
    } catch (error) {
      console.error("Error during deletion process:", error);
    }
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
            <button
              onClick={() => navigate("/edit")}
              className="text-gray-600 font-bold hover:text-cyan-800"
            >
              Edit all
            </button>
          </li>
          <li>
            <button
              onClick={handleDelete}
              className="text-gray-600 font-bold hover:text-red-800"
            >
              Delete all
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
