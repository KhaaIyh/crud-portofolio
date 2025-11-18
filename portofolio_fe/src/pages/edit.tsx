import { useEffect, useState } from "react";
import User from "../components/create/user";
import Skill from "../components/create/skill";
import Certificate from "../components/create/certificate";
import Project from "../components/create/project";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import { userApi } from "../midleware/user.api";
import { skillApi } from "../midleware/skill.api";
import { certificateApi } from "../midleware/certificate.api";
import { projectApi } from "../midleware/project.api";
/* eslint-disable @typescript-eslint/no-explicit-any */

interface EditProps {
  selectedUserId?: string | null;
}

function Edit({ selectedUserId }: EditProps) {
  const navigate = useNavigate();

  const [users, setUsers] = useState<any>({
    id_user: undefined,
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

  const [userProfilePath, setUserProfilePath] = useState<string>("");

  const [skills, setSkills] = useState<any[]>([
    { nama_skill: "", desk_skill: "" },
  ]);

  const addSkill = () => {
    setSkills([...skills, { nama_skill: "", desk_skill: "" }]);
  };

  const [projects, setProjects] = useState<any[]>([
    {
      id_project: undefined,
      nama_project: "",
      desk_project: "",
      foto_project: null as File | null,
    },
  ]);

  const [, setProjectPaths] = useState<Record<string, string>>({});

  const addProject = () => {
    setProjects([
      ...projects,
      {
        id_project: undefined,
        nama_project: "",
        desk_project: "",
        foto_project: null,
      },
    ]);
  };

  const [certificates, setCertificates] = useState<any[]>([
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
      id_user: undefined,
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
    setProjects([
      {
        id_project: undefined,
        nama_project: "",
        desk_project: "",
        foto_project: null,
      },
    ]);
    setCertificates([{ nama_certificate: "", desk_certificate: "" }]);
    setProjectPaths({});
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (!selectedUserId) return;

      try {
        const [
          userResponse,
          skillResponse,
          certificateResponse,
          projectResponse,
        ] = await Promise.all([
          userApi.getUser(selectedUserId),
          skillApi.getSkill(selectedUserId),
          certificateApi.getCertificate(selectedUserId),
          projectApi.getProject(selectedUserId),
        ]);

        const userData = userResponse.data.data.items || [];
        if (userData.length > 0) {
          const user = userData[0];
          setUsers({
            id_user: user.id_user,
            nama: user.nama || "",
            title: user.title || "",
            email: user.email || "",
            no_hp: user.no_hp || "",
            github: user.github || "",
            instagram: user.instagram || "",
            linkedin: user.linkedin || "",
            profile: null,
            bio: user.bio || "",
          });
          setUserProfilePath(user.profile || "");
        }

        setSkills(
          (skillResponse.data.data.items || []).map((skill: any) => ({
            id_skill: skill.id_skill,
            nama_skill: skill.nama_skill || "",
            desk_skill: skill.desk_skill || "",
          }))
        );
        setCertificates(
          (certificateResponse.data.data.items || []).map(
            (certificate: any) => ({
              id_certificate: certificate.id_certificate,
              nama_certificate: certificate.nama_certificate || "",
              desk_certificate: certificate.desk_certificate || "",
            })
          )
        );

        setProjects(
          projectResponse.data.data.items.map((project: any) => ({
            id_project: project.id_project,
            nama_project: project.nama_project || "",
            desk_project: project.desk_project || "",
            foto_project: null,
          }))
        );
      } catch (err) {
        console.log("Error fetching user data:", err);
      }
    };
    fetchUserData();
  }, [selectedUserId]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!users.id_user) {
        alert("User ID is missing.");
        return;
      }

      if (users.profile) {
        const formData = new FormData();
        formData.append("profile", users.profile);
        formData.append("nama", users.nama);
        formData.append("email", users.email);
        formData.append("no_hp", users.no_hp);
        formData.append("title", users.title);
        formData.append("bio", users.bio);
        formData.append("instagram", users.instagram);
        formData.append("github", users.github);
        formData.append("linkedin", users.linkedin);
        await userApi.updateUser(users.id_user, formData);
      } else {
        const userPayload = {
          nama: users.nama,
          email: users.email,
          no_hp: users.no_hp,
          title: users.title,
          bio: users.bio,
          github: users.github,
          instagram: users.instagram,
          linkedin: users.linkedin,
          profile: userProfilePath,
        };

        await userApi.updateUser(users.id_user, userPayload);
      }

      for (const skill of skills) {
        if (skill.id_skill) {
          await skillApi.updateSkill(skill.id_skill, {
            id_skill: skill.id_skill,
            nama_skill: skill.nama_skill,
            desk_skill: skill.desk_skill,
            id_user: users.id_user,
          });
        } else if (skill.nama_skill || skill.desk_skill) {
          await skillApi.createSkill({
            nama_skill: skill.nama_skill,
            desk_skill: skill.desk_skill,
            id_user: users.id_user,
          });
        }
      }

      for (const certificate of certificates) {
        if (certificate.id_certificate) {
          await certificateApi.updateCertificate(certificate.id_certificate, {
            id_certificate: certificate.id_certificate,
            nama_certificate: certificate.nama_certificate,
            desk_certificate: certificate.desk_certificate,
            id_user: users.id_user,
          });
        } else if (
          certificate.nama_certificate ||
          certificate.desk_certificate
        ) {
          await certificateApi.createCertificate({
            nama_certificate: certificate.nama_certificate,
            desk_certificate: certificate.desk_certificate,
            id_user: users.id_user,
          });
        }
      }

      for (const project of projects) {
        if (project.id_project) {
          const formData = new FormData();
          formData.append("id_project", project.id_project);
          formData.append("nama_project", project.nama_project);
          formData.append("desk_project", project.desk_project);
          formData.append("id_user", users.id_user);
          if (project.foto_project) {
            formData.append("foto_project", project.foto_project);
          }
          await projectApi.updateProject(project.id_project, formData);
        } else if (
          project.nama_project ||
          project.desk_project ||
          project.foto_project
        ) {
          const formData = new FormData();
          formData.append("nama_project", project.nama_project);
          formData.append("desk_project", project.desk_project);
          formData.append("id_user", users.id_user);
          if (project.foto_project) {
            formData.append("foto_project", project.foto_project);
          }
          await projectApi.createProject(formData);
        }
      }

      console.log("Data updated successfully");
      navigate("/");
    } catch (err) {
      console.log("Error updating portofolio:", err);
      alert("Error updating portofolio. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <User users={users} setUsers={setUsers} />

        <Skill skills={skills} setSkills={setSkills} addSkill={addSkill} />
        <Project
          projects={projects}
          setProjects={setProjects}
          addProject={addProject}
        />

        <Certificate
          certificates={certificates}
          setCertificates={setCertificates}
          addCertificate={addCertificate}
        />

        <Button resetForm={resetForm} />
      </form>
    </>
  );
}

export default Edit;
