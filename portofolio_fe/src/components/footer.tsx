import Ig from "../assets/instagram.png";
import Gh from "../assets/github.png";
import Li from "../assets/linkedin.png";
import { useEffect, useState } from "react";
import { userApi, type User } from "../midleware/user.api";

interface FooterProps {
  selectedUserId?: string | null;
}

function Footer({ selectedUserId }: FooterProps) {
  const [users, setUser] = useState<User[]>([]);
  const selected = selectedUserId;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await userApi.getUser();
        const items = res.data.data.items || [];
        setUser(items);
        // const popularMovies = res.results.slice(0, 5); // Ambil 5 film
      } catch (error) {
        console.error("Gagal mengambil data user:", error);
      }
    };
    fetchUser();
  }, []);

  const dummyUser: User = {
    email: "Your Email",
    no_hp: "Your Phone Number",
    instagram: "/",
    linkedin: "/",
    github: "/",
    nama: "Your Name",
    title: "Your Title",
    bio: "Your Bio",
    profile: null,
  };

  const selectedUser = users.find((u) => u.id_user === selected) || dummyUser;

  // if (!useEffect) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-base-200 text-black text-xl">
  //       Loading...
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="bg-slate-800 text-white p-4 flex justify-around">
        <p className="font-bold text-xl">My Contact</p>
        <ul className="flex gap-5">
          <li>
            <a href={selectedUser?.instagram}>
              <img src={Ig} alt="Your Instagram" className="h-7" />
            </a>
          </li>
          <li>
            <a href={selectedUser?.github}>
              <img src={Gh} alt="Your Github" className="h-7" />
            </a>
          </li>
          <li>
            <a href={selectedUser?.linkedin}>
              <img src={Li} alt="Your Linkedin" className="h-7" />
            </a>
          </li>
          <li>{selectedUser?.email}</li>
          <li>{selectedUser?.no_hp}</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
