import { users } from "../../data/users";
import styles from "./index.module.css";

export function UsersList() {
  return (
    <>
      <div className={styles.pageContainer}>
        {users.map(({ id, username, img, job }) => {
          return (
            <div className={styles.card} key={id}>
              <img src={img} alt={`${username}'s picture`} />
              <h1>{username}</h1>
              <p>{job}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
