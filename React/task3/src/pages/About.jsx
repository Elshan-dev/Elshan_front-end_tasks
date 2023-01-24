import { PageContainer } from "components/PageContainer";
import  ardf  from "../images/ardf.png";
import styles from "../components/PageContainer/index.module.css"

export function About({}) {
  return (
    <PageContainer>
      <div className={styles.aboutStyles}>
        <img src={ardf} alt="" />
        <p>
          Arda Turan was a professional high-skilled football player until he
          chose to try his luck in music sector.
        </p>
      </div>
    </PageContainer>
  );
}
