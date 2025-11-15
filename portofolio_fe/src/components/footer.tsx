import Ig from "../assets/instagram.png";
import Gh from "../assets/github.png";
import Li from "../assets/linkedin.png";
import { useEffect, useState } from "react";
import { userApi, type User } from "../midleware/user.api";

function Footer() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await userApi.getUser();
        const items = res.data.data.items;
        if (items && items.length > 0){
          setUser(items[0]);
        }
        // const popularMovies = res.results.slice(0, 5); // Ambil 5 film
      } catch (error) {
        console.error("Gagal mengambil data user:", error);
      }
    };
    fetchUser();
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
      <div className="bg-slate-800 text-white p-4 flex justify-around">
        <p className="font-bold text-xl">My Contact</p>
        <ul className="flex gap-5">
          <li>
            <a href={user?.instagram}>
              <img src={Ig} alt="Your Instagram" className="h-7" />
            </a>
          </li>
          <li>
            <a href={user?.github}>
              <img src={Gh} alt="Your Github" className="h-7" />
            </a>
          </li>
          <li>
            <a href={user?.linkedin}>
              <img src={Li} alt="Your Linkedin" className="h-7" />
            </a>
          </li>
          <li>{user?.email || "Your Email@gmail.com"}</li>
          <li>{user?.no_hp || "Your Number Phone"}</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
