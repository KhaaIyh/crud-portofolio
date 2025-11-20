import { useState } from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(
    typeof window !== "undefined"
      ? localStorage.getItem("selectedUserId")
      : null
  );

  const location = useLocation();
  const hideLayout =
    location.pathname === "/create" || location.pathname === "/edit";

  return (
    <div>
      {!hideLayout && (
        <Navbar
          selectedUserId={selectedUserId}
          onSelectUser={setSelectedUserId}
        />
      )}
      <Hero selectedUserId={selectedUserId} />

      {!hideLayout && (
        <Footer
          selectedUserId={selectedUserId}
        />
      )}
    </div>
  );
};

export default Home;
