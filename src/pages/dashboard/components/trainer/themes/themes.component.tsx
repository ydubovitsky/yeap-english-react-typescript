import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { themeEntitiesSelector } from "../../../../../redux/features/theme/theme.slice";
import styles from "./themes.module.css";

const ThemesComponent = () => {
  const themeEntities = useSelector(themeEntitiesSelector);

  const showAllThemesEl = () => {
    return themeEntities.map(({ id, name, taskList }) => (
      <Link className={styles.themeName} key={id} to={`?themeId=${id}`}>
        <p>{name}</p>
        <p>({taskList.length})</p>
      </Link>
    ));
  };

  return (
    <div className={styles.container}>
      <h1>Themes</h1>
      <div className={styles.themesList}>{showAllThemesEl()}</div>
    </div>
  );
};

export default ThemesComponent;