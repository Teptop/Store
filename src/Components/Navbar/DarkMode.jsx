import React from 'react'
import lightButton from '../../assets/website/light-mode-button.png'
import darkButton from '../../assets/website/dark-mode-button.png'

const DarkMode = () => {
    const [theme,setTheme] = React.useState(
        localStorage.getItem('theme')? localStorage.getItem('theme')
        : 'light'
    );
    // acces to html element
    const element = document.documentElement; 

    // Set theme to localStorage and html element
    React.useEffect(()=>{
        localStorage.setItem("theme" , theme);
        if (theme == "dark") {
            element.classList.add("dark");
            element.classList.add("dark");
        }else{
            element.classList.remove("light");
            element.classList.remove("dark");
        }
    });

  return (
    <div className='relative'>
      <img 
      onClick={()=>setTheme(theme == "dark"? "light":"dark")}
      src={lightButton} alt=""
      className={`w-12
        cursor-pointer absolute right-0 z-10 ${theme === "dark"?"opacity-0" : "opacity-100"}
         transition-all duration-300
        `}
      />
        <img 
        onClick={()=>setTheme(theme == "dark"? "light":"dark")}
        src={darkButton} alt=""
      className={`w-12
        cursor-pointer 
        `}
      />

    </div>
  )
}

export default DarkMode
