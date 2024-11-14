import { createContext, useState } from "react";

export const christmasThemeThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [christmasTheme, setChristmasTheme] = useState(false);

    // Function to toggle the theme
    const toggleChristmasTheme = () => {
        setChristmasTheme(prevTheme => !prevTheme);
    };

    return (
        <christmasThemeThemeContext.Provider value={{ christmasTheme, toggleChristmasTheme }}>
            {children}
        </christmasThemeThemeContext.Provider>
    );
};

export default ThemeProvider;

