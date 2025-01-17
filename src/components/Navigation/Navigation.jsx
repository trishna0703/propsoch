import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { Heart, MapPin, Search, User } from "lucide-react";

export default function Navigation() {
  const router = useRouter();

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        <li className={styles.navigation__item}>
          <Link
            href="/property"
            className={`${styles.navigation__link} ${
              router.pathname === "/property"
                ? styles.navigation__link_active
                : ""
            }`}
          >
            <span className={styles.navigation__icon}>
              <Search />
            </span>
            <span>Explore</span>
          </Link>
        </li>
        <li className={styles.navigation__item}>
          <Link
            href="/wishlist"
            className={`${styles.navigation__link} ${
              router.pathname === "/wishlist"
                ? styles.navigation__link_active
                : ""
            }`}
          >
            <span className={styles.navigation__icon}>
              <Heart />
            </span>
            <span>Wishlist</span>
          </Link>
        </li>
        <li className={styles.navigation__item}>
          <Link
            href="/map"
            className={`${styles.navigation__link} ${
              router.pathname === "/map" ? styles.navigation__link_active : ""
            }`}
          >
            <span className={styles.navigation__icon}>
              <MapPin />
            </span>
            <span>Show Map</span>
          </Link>
        </li>
        <li className={styles.navigation__item}>
          <Link
            href="/profile"
            className={`${styles.navigation__link} ${
              router.pathname === "/profile"
                ? styles.navigation__link_active
                : ""
            }`}
          >
            <span className={styles.navigation__icon}>
              <User />
            </span>
            <span>Log In</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
