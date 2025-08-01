import React, { useContext } from "react";
import { ThemeContext, type ThemeType } from "../context/themeContext";
import { useThemeStyles } from "../themes/useThemeStyles";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as ThemeType);
  };

  const styles = useThemeStyles() ?? {};

  return (
    <select
      value={theme}
      onChange={handleChange}
      className={`p-2 border rounded ${styles.selectField}`}
    >
      <option value="theme1">Theme 1 - Minimal</option>
      <option value="theme2">Theme 2 - Dark</option>
      <option value="theme3">Theme 3 - Playful</option>
    </select>
  );
};

export default ThemeSwitcher;
