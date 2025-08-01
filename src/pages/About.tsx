import React from "react";
import { useThemeStyles } from "../themes/useThemeStyles";

const About: React.FC = () => {
  const styles = useThemeStyles();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.paragraph}>
        Welcome to ThemeSwitcher! This project demonstrates how to switch themes
        dynamically using CSS modules in a React app.
      </p>
      <p className={styles.paragraph}>
        You can explore multiple themes using the toggle in the header. Each
        theme has its own styling defined in separate CSS modules, and the app
        uses context to load the selected theme globally.
      </p>
    </div>
  );
};

export default About;
