import { useEffect, useState } from "react";
import { userApi, type User } from "../midleware/user.api";
import { skillApi, type Skill } from "../midleware/skill.api";
import { certificateApi, type Certificate } from "../midleware/certificate.api";
import { projectApi, type Project } from "../midleware/project.api";

const API_BASE = (import.meta.env.VITE_REACT_API_URL || '').replace(/\/api\/?$/, '');

function Hero() {
  const [user, setUser] = useState<User | null>(null);
  const [skill, setSkill] = useState<Skill[]>([]);
  const [certificate, setCertificate] = useState<Certificate[]>([]);
  const [project, setProject] = useState<Project[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await userApi.getUser();
        const items = res.data.data.items;
        if (items && items.length > 0) {
          setUser(items[0]);
        }
        // const popularMovies = res.results.slice(0, 5); // Ambil 5 film
      } catch (error) {
        console.error("Gagal mengambil data user:", error);
      }
    };

    const fetchSkill = async () => {
      try {
        const res = await skillApi.getSkill();
        console.log(res.data);
        const items = res.data.data.items;
        if (items && items.length > 0) {
          setSkill(items);
        }
        // const popularMovies = res.results.slice(0, 5); // Ambil 5 film
      } catch (error) {
        console.error("Gagal mengambil data skill:", error);
      }
    };

    const fetchCertificate = async () => {
      try {
        const res = await certificateApi.getCertificate();
        console.log(res.data);
        const items = res.data.data.items;
        if (items && items.length > 0) {
          setCertificate(items);
        }
        // const popularMovies = res.results.slice(0, 5); // Ambil 5 film
      } catch (error) {
        console.error("Gagal mengambil data certificate:", error);
      }
    };

    const fetchProject = async () => {
      try {
        const res = await projectApi.getProject();
        console.log(res.data);
        const items = res.data.data.items;
        if (items && items.length > 0) {
          setProject(items);
        }
        // const popularMovies = res.results.slice(0, 5); // Ambil 5 film
      } catch (error) {
        console.error("Gagal mengambil data project:", error);
      }
    };

    fetchProject();
    fetchUser();
    fetchSkill();
    fetchCertificate();
  }, []);

  // if (!useEffect) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-base-200 text-black text-xl">
  //       Loading...
  //     </div>
  //   );
  // }

  return (
    <>
      <div id="home">
        <div className="bg-slate-200 text-black py-20 px-60 flex justify-around items-center">
          <div>
            <h1 className="font-bold text-6xl">{user?.nama || "Your Name"}</h1>
            <p className="max-w-3xl pt-6 text-justify text-2xl">
              {user?.title || "Your title."}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-xl">
            <img
              src={user?.profile ? `${API_BASE}${user.profile}` : undefined}
              alt="Your Photo"
              className="w-80 h-60"
            />
          </div>
        </div>

        <div className="bg-white text-black py-20 px-96 flex flex-col items-center">
          <h1 className="font-bold text-3xl">About Me</h1>
          <p className="pt-6 text-justify">{user?.bio || "Your Bio"}</p>
        </div>
      </div>

      <div
        className="bg-slate-200 text-black py-20 px-60 flex flex-col items-center"
        id="skills"
      >
        <h1 className="font-bold text-3xl">My Skills</h1>

        <div className="flex justify-between pt-6 gap-20">
          {skill.length > 0 ? (
            skill.map((skill) => (
              <div key={skill.id_skill}>
                <h3 className="font-bold text-xl">{skill?.nama_skill || "Your Skills"}</h3>
                <p className="max-w-2xl pb-4 ">{skill?.desk_skill || "Description Skills"}</p>
              </div>
            ))
          ) : (
            <div className="bg-slate-200 text-black flex flex-col items-center">
              <div className="flex justify-between gap-20">
                <div>
                  <h3 className="font-bold text-xl">Your Skills</h3>
                  <p className="max-w-2xl pb-4 ">Description Skills</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Your Skills</h3>
                  <p className="max-w-2xl pb-4 ">Description Skills</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Your Skills</h3>
                  <p className="max-w-2xl pb-4 ">Description Skills</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Your Skills</h3>
                  <p className="max-w-2xl pb-4 ">Description Skills</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Your Skills</h3>
                  <p className="max-w-2xl pb-4 ">Description Skills</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Your Skills</h3>
                  <p className="max-w-2xl pb-4 ">Description Skills</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Your Skills</h3>
                  <p className="max-w-2xl pb-4 ">Description Skills</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Your Skills</h3>
                  <p className="max-w-2xl pb-4 ">Description Skills</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className="bg-white text-black py-20 px-60 flex flex-col items-center"
        id="certificate"
      >
        <h1 className="font-bold text-3xl">My Certificate</h1>

        <div className="flex justify-between pt-6 gap-4">
          {certificate.length > 0 ? (
            certificate.map((certificate) => (
              <div
                key={certificate.id_certificate}
                className="text-center rounded-md bg-slate-300 p-4 shadow-xl"
              >
                <h3 className="font-bold text-xl">
                  {certificate?.nama_certificate || "Your Certificate"}
                </h3>
                <p className="max-w-2xl text-justify">
                  {certificate?.desk_certificate || "Description Certificate"}
                </p>
              </div>
            ))
          ) : (
            <div
              className="bg-white text-black flex flex-col items-center"
              id="certificate"
            >
              <div className="flex justify-between gap-4">
                <div className="text-center rounded-md bg-slate-300 p-4 shadow-xl">
                  <h3 className="font-bold text-xl">Your Certificate</h3>
                  <p className="max-w-2xl text-justify">
                    Description Certificate
                  </p>
                </div>
                <div className="text-center rounded-md bg-slate-300 p-4 shadow-xl">
                  <h3 className="font-bold text-xl">Your Certificate</h3>
                  <p className="max-w-2xl text-justify">
                    Description Certificate
                  </p>
                </div>
                <div className="text-center rounded-md bg-slate-300 p-4 shadow-xl">
                  <h3 className="font-bold text-xl">Your Certificate</h3>
                  <p className="max-w-2xl text-justify">
                    Description Certificate
                  </p>
                </div>
                <div className="text-center rounded-md bg-slate-300 p-4 shadow-xl">
                  <h3 className="font-bold text-xl">Your Certificate</h3>
                  <p className="max-w-2xl text-justify">
                    Description Certificate
                  </p>
                </div>
                <div className="text-center rounded-md bg-slate-300 p-4 shadow-xl">
                  <h3 className="font-bold text-xl">Your Certificate</h3>
                  <p className="max-w-2xl text-justify">
                    Description Certificate
                  </p>
                </div>
                <div className="text-center rounded-md bg-slate-300 p-4 shadow-xl">
                  <h3 className="font-bold text-xl">Your Certificate</h3>
                  <p className="max-w-2xl text-justify">
                    Description Certificate
                  </p>
                </div>
                <div className="text-center rounded-md bg-slate-300 p-4 shadow-xl">
                  <h3 className="font-bold text-xl">Your Certificate</h3>
                  <p className="max-w-2xl text-justify">
                    Description Certificate
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className="bg-slate-200 text-black py-20 px-60 flex flex-col items-center"
        id="project"
      >
        <h1 className="font-bold text-3xl">My Project</h1>
        <div className="flex justify-between pt-6 gap-5">
          {project.length > 0 ? (
            project.map((project) => (
              <div
                key={project.id_project}
                className="border-2 text-center rounded-md bg-white p-4 shadow-xl"
              >
                <div className="bg-slate-300 mb-4 flex items-center justify-center rounded-md">
                  <img src={project?.foto_project ? `${API_BASE}${project.foto_project}` : undefined} alt="Photo Project" className="p-4" />
                </div>
                <h3 className="font-bold text-xl">{project?.nama_project || "Your Project"}</h3>
                <p className="max-w-2xl text-justify">{project?.desk_project || "Description Project"}</p>
              </div>
            ))
          ) : (
            <div
              className="bg-slate-200 text-black flex flex-col items-center"
              id="project"
            >
              <div className="flex justify-between gap-5">
                <div className="border-2 text-center rounded-md bg-white p-4 shadow-xl">
                  <div className="bg-slate-300 mb-4 flex items-center justify-center rounded-md">
                    <img alt="Photo Project" className="m-4 w-full" />
                  </div>
                  <h3 className="font-bold text-xl">Your Project</h3>
                  <p className="max-w-2xl text-justify">Description Project</p>
                </div>
                <div className="border-2 text-center rounded-md bg-white p-4 shadow-xl">
                  <div className="bg-slate-300 mb-4 flex items-center justify-center rounded-md">
                    <img alt="Photo Project" className="m-4 w-full" />
                  </div>
                  <h3 className="font-bold text-xl">Your Project</h3>
                  <p className="max-w-2xl text-justify">Description Project</p>
                </div>
                <div className="border-2 text-center rounded-md bg-white p-4 shadow-xl">
                  <div className="bg-slate-300 mb-4 flex items-center justify-center rounded-md">
                    <img alt="Photo Project" className="m-4 w-full" />
                  </div>
                  <h3 className="font-bold text-xl">Your Project</h3>
                  <p className="max-w-2xl text-justify">Description Project</p>
                </div>
                <div className="border-2 text-center rounded-md bg-white p-4 shadow-xl">
                  <div className="bg-slate-300 mb-4 flex items-center justify-center rounded-md">
                    <img alt="Photo Project" className="m-4 w-full" />
                  </div>
                  <h3 className="font-bold text-xl">Your Project</h3>
                  <p className="max-w-2xl text-justify">Description Project</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Hero;
