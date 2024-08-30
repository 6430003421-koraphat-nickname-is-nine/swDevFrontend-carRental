import styles from "./topmenu.module.css";
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div className={styles.menucontainer}>
      <Image
        src={"/img/logo.png"}
        alt="Logo"
        className={styles.logoimg}
        width={0}
        height={0}
        sizes="100vh"
      />
      <TopMenuItem title="Reservations" pageRef="/reservations/"></TopMenuItem>
      <TopMenuItem title="About" pageRef="/about/"></TopMenuItem>
    </div>
  );
}
