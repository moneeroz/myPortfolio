import Link from "next/link";
import ContactModal from "./ContactModal";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      {" "}
      <Link
        href="/"
        className="text-lg font-bold bg-gradient-to-r from-purple-600 via-red-400 to-orange-400 bg-clip-text text-transparent"
      >
        Moneer
      </Link>
      <ContactModal />
    </div>
  );
};

export default Navbar;
