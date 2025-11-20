import { useState } from "react";
import Users from "../components/create/user";
import Skills from "../components/create/skill";
import Certificates from "../components/create/certificate";
import Projects from "../components/create/project";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import { userApi } from "../midleware/user.api";
import { skillApi } from "../midleware/skill.api";
import { certificateApi } from "../midleware/certificate.api";
import { projectApi } from "../midleware/project.api";

function Create() {
  const navigate = useNavigate();

  const [users, setUsers] = useState({
    nama: "",
    title: "",
    email: "",
    no_hp: "",
    github: "",
    instagram: "",
    linkedin: "",
    profile: null as File | null,
    bio: "",
  });

  const [skills, setSkills] = useState([{ nama_skill: "", desk_skill: "" }]);
  const addSkill = () => {
    setSkills([...skills, { nama_skill: "", desk_skill: "" }]);
  };

  const [projects, setProjects] = useState([
    { nama_project: "", desk_project: "", foto_project: null as File | null },
  ]);
  const addProject = () => {
    setProjects([
      ...projects,
      { nama_project: "", desk_project: "", foto_project: null },
    ]);
  };

  const [certificates, setCertificates] = useState([
    { nama_certificate: "", desk_certificate: "" },
  ]);
  const addCertificate = () => {
    setCertificates([
      ...certificates,
      { nama_certificate: "", desk_certificate: "" },
    ]);
  };

  const resetForm = () => {
    setUsers({
      nama: "",
      title: "",
      email: "",
      no_hp: "",
      github: "",
      instagram: "",
      linkedin: "",
      profile: null,
      bio: "",
    });

    setSkills([{ nama_skill: "", desk_skill: "" }]);
    setProjects([{ nama_project: "", desk_project: "", foto_project: null }]);
    setCertificates([{ nama_certificate: "", desk_certificate: "" }]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("nama", users.nama);
      formData.append("email", users.email);
      formData.append("no_hp", users.no_hp);
      formData.append("title", users.title);
      formData.append("bio", users.bio);
      formData.append("instagram", users.instagram);
      formData.append("github", users.github);
      formData.append("linkedin", users.linkedin);
      if (users.profile) {
        formData.append("profile", users.profile);
      }
      const userResponse = await userApi.createUser(formData);
      const id_user = userResponse.data.data.id_user;

      for (const skill of skills) {
        if (skill.nama_skill || skill.desk_skill) {
          try {
            await skillApi.createSkill({
              nama_skill: skill.nama_skill,
              desk_skill: skill.desk_skill,
              id_user: id_user,
            });
            console.log("Skill created");
          } catch (err) {
            console.error("Error creating skill:", err);
          }
        }
      }

      for (const certificate of certificates) {
        if (certificate.nama_certificate || certificate.desk_certificate) {
          try {
            await certificateApi.createCertificate({
              nama_certificate: certificate.nama_certificate,
              desk_certificate: certificate.desk_certificate,
              id_user: id_user,
            });
            console.log("Certificate created");
          } catch (err) {
            console.error("Error creating certificate:", err);
          }
        }
      }

      for (const project of projects) {
        if (project.nama_project || project.desk_project) {
          const projectData = new FormData();
          projectData.append("nama_project", project.nama_project);
          projectData.append("desk_project", project.desk_project);
          projectData.append("id_user", id_user);
          if (project.foto_project) {
            projectData.append("foto_project", project.foto_project);
          }
          try {
            await projectApi.createProject(projectData);
            console.log("Project created");
          } catch (err) {
            console.error("Error creating project:", err);
          }
        }
      }

      console.log("Portoflio created successfully");
      navigate("/");
    } catch (err) {
      console.log("Error creating portofolio:", err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Users users={users} setUsers={setUsers} />

        <Skills skills={skills} setSkills={setSkills} addSkill={addSkill} />
        <Projects
          projects={projects}
          setProjects={setProjects}
          addProject={addProject}
        />

        <Certificates
          certificates={certificates}
          setCertificates={setCertificates}
          addCertificate={addCertificate}
        />

        <Button resetForm={resetForm} />
      </form>
    </>
  );
}

export default Create;
