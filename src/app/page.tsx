import styles from "./page.module.css";
import QuillPage from "./quill/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>React quill editor sample</h1>
      <QuillPage />
    </main>
  );
}
