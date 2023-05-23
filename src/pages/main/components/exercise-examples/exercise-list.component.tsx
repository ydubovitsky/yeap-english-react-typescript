import { Fade } from "react-awesome-reveal";
import SectionTitleComponent from "../../../../common/atomic-components/section-title/section-title.component";
import TrainerComponent from "../../../dashboard/components/times/components/trainer/trainer.component";
import { PRESENT_CONTINUOUS } from "../../../dashboard/components/times/data";
import styles from "./exercise-list.module.css";

const ExerciseListComponent: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Fade>
        <SectionTitleComponent name="Бесконечное количесвто заданий" />
        <TrainerComponent tense={PRESENT_CONTINUOUS} />
      </Fade>
    </div>
  );
};

export default ExerciseListComponent;
