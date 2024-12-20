import styles from "./topmenu.module.css";
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <div className={styles.menucontainer}>
      <Link href="/">
        <Image
          src={"/img/logo.png"}
          alt="Logo"
          className="h-[100%] w-[128px]"
          width={0}
          height={0}
          sizes="100vh"
        />
      </Link>

      <div className="flex flex-row space-x-[10px]">
        <TopMenuItem title="Select Car" pageRef="/car"></TopMenuItem>
        <TopMenuItem title="Reservations" pageRef="/reservations"></TopMenuItem>
        <TopMenuItem title="About" pageRef="/about"></TopMenuItem>
        <TopMenuItem title="Cart" pageRef="/cart"></TopMenuItem>
      </div>

      {session ? (
        <Link href="/api/auth/signout">
          <div className="flex items-center absolute right-0 h-full px-2 text-cyan-600 text-sm">
            Sign Out of {session.user?.name}
          </div>
        </Link>
      ) : (
        <Link href="/api/auth/signin">
          <div className="flex items-center absolute right-0 h-full px-2 text-cyan-600 text-sm">
            Sign In
          </div>
        </Link>
      )}
    </div>
  );
}
