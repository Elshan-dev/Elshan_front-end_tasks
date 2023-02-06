import { PageContainer } from "components/PageContainer";
import ard from "../images/ard.webp";
import styles from "../components/PageContainer/index.module.css";

export function Home({ }) {
  return (
    <PageContainer>
      <div className={styles.homeStyles}>
        <p>
          {/* A: 😁👍 */}
          This is a website for Arda Turan's incredible,unbelievable,spectacular
          performance <br />
          <a target="_blank" href="https://www.youtube.com/watch?v=LHYaeCgjxrw">
            Watch now!
          </a>
        </p>
        <img src={ard} alt="" />
      </div>
    </PageContainer>
  );
}
