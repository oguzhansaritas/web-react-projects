import { useTheme } from "../hooks/useTheme"
import "./ThemeSelector.css"
import modeIcon from "../assets/mode-icon.svg"

const themeColors = ["#58249c","#66CDAA","#2F4F4F"]

export default function ThemeSelector() {

    const {changeColor, changeMode, mode}= useTheme()

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }
    console.log(mode)

    return (
        
        <div className="theme-selector">
            <div className="mode-toggle">
                <img
                onClick={toggleMode}
                src={modeIcon}
                alt="dark/light toggle icon"
                style={{filter : mode === 'dark' ? 'invert(100%)' : 'invert(20%'}}
                />
            </div>
            <div className="theme-buttons">
                {themeColors.map(color => (
                    <div
                        key = {color}
                        onClick = {() => changeColor(color)}
                        style = {{background : color}}
                    />
                ))}
            </div>
        </div>
    )
} 