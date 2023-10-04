import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className="flex-center">
      <nav className={styles.nav}>
        <h1 className="h3-bold">Next Overflow</h1>

        <ul className={styles.links}>
          <Link href="/">
            <li>Home 🏠</li>
          </Link>
          <Link href="/about">
            <li>About 🐶</li>
          </Link>
          <Link href="/contacts">
            <li>Contacts ☎️</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
