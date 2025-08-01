import { useContext } from "react";
import theme1 from "../styles/theme1.module.css";
import theme2 from "../styles/theme2.module.css";
import theme3 from "../styles/theme3.module.css";
import { ThemeContext } from "../context/themeContext";

export const useThemeStyles = () => {
  const { theme } = useContext(ThemeContext);

  if (theme) {
    if (theme === "theme1") {
      return theme1;
    } else if (theme === "theme2") {
      return theme2;
    } else if (theme === "theme3") {
      return theme3;
    }
  } else {
    return theme;
  }
};
