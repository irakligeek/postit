import styles from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "../routes/NewPost";
import Modal from "./Modal";
import { useLoaderData } from "react-router-dom";

export default function PostsList({ isModalVisible, onCloseModal }) {

  const loaderData = useLoaderData();
  let posts = null;

  if(loaderData.status === 200){
    posts = loaderData.posts;
  }

  return (
    <>
      {isModalVisible && (
        <Modal onClose={onCloseModal}>
          <NewPost onCancel={onCloseModal} />
        </Modal>
      )}
      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post
              key={post.objectId}
              className={styles.post}
              name={post.author}
              content={post.post}
            ></Post>
          ))}
        </ul>
      ) : (
        <div>
          <h1 className={styles.heading}>There are no posts yet</h1>
          <p className={styles.subheading}>Start adding some</p>
        </div>
      )}
    </>
  );
}
