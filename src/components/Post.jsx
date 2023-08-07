import styles from "./Post.module.css";

export default function Post({name, content, id}) {
  return (
    <li key={id} className={styles.post}>
      <p className={styles.author}>{name}</p>
      <p className={styles.text}>{content}</p>
    </li>
  );
}
