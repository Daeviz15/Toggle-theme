import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function Form() {
  const [theme, setTheme] = useState("light");
  const toggletheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggletheme }}>
      <div id={theme}>
       <form>
        <h1>log in</h1>
       <input type="text" placeholder="  email" />
       <input type="text" placeholder="  password"/>
       <a href="/src/project/home.html">Log in</a>
       </form>
       <div className="toggler">
        <label>{theme === 'light' ? 'Light Mode' : "Dark Mode"}</label>
   <ReactSwitch onChange={toggletheme} checked={theme === 'dark'}/>
       </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default Form;
