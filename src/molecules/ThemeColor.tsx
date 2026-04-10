import { useAtom } from 'jotai';
import { themeColorAtom } from '../assets/jotai';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Btn } from "../atoms/Btn";
import { SetLS } from "../utils/UseLocalStorage";

export const ThemeColor = () => {
    const [theme, setTheme] = useAtom(themeColorAtom);
    const afterClickAction = (selectedTheme: string) => {
        setTheme(selectedTheme);
        SetLS('theme', selectedTheme);
    };
    return (
        <>
            <Btn type="button" onClick={() => { afterClickAction(theme === 'dark' ? 'light' : 'dark') }} shape="circle">
                {theme === 'dark' && <FontAwesomeIcon icon={faSun} />}
                {theme === 'light' && <FontAwesomeIcon icon={faMoon} />}
            </Btn>
        </>
    );
};