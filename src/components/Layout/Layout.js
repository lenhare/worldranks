import Head from "next/head";
import styles from "./Layout.module.css";

const Layout = ({ children, title = "World Ranks" }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="Logo.svg" alt="Logo" />
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Renan Lenhare</footer>
    </div>
  );
};

export default Layout;
