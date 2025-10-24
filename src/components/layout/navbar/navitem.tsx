import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  const pathname = usePathname(); // Get the current path
  const isActive = pathname === href;

  return (
    <div className="relative">
      {/* Link */}
    
      <Link
        href={href}
        className={`text-md font-semibold ${
          isActive ? "text-black" : "text-gray-500 hover:text-black/75"
        }`}
        style={{ fontFamily: "var(--font-poppins)" }} // Apply Poppins font
      >
        {children}
      </Link>

      {/* Underline for active link */}
      {isActive && (
        <motion.div
          className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-black"
          layoutId="underline"
        />
      )}

      {/* Animated underline for hover */}
        <motion.div
          className=" h-[2px] bg-black"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          exit={{ width: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
    </div>
  );
};

export default NavItem;
