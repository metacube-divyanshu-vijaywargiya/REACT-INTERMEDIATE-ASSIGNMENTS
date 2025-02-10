import useTheme from "../Contexts/ThemeContext";

function ThemeButton(){
    const {themeMode, lightTheme, darkTheme} = useTheme();

    const handleChange = ()=>{
        if(themeMode === 'dark'){
            lightTheme()
        }else{
            darkTheme();
        }
    }   

    return(
        <>
            <label>
                <input type="checkbox" value="" onChange={handleChange} checked={themeMode === "dark" }></input>
                <span>{themeMode.toUpperCase()}</span>
            </label>
        </>
    )
}

export default ThemeButton;