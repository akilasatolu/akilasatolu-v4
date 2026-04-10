import { useAtom } from 'jotai';
import { modeColorAtom } from '../assets/jotai';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Btn } from "../atoms/Btn";
import { SetLS } from "../utils/UseLocalStorage";

export const ModeColor = () => {
    const [mode, setMode] = useAtom(modeColorAtom);
    const afterClickAction = (selectedMode: string) => {
        setMode(selectedMode);
        SetLS('mode', selectedMode);
    };
    return (
        <>
            <Btn type="button" onClick={() => { afterClickAction(mode === 'dark' ? 'light' : 'dark') }} shape="circle">
                {mode === 'dark' && <FontAwesomeIcon icon={faSun} />}
                {mode === 'light' && <FontAwesomeIcon icon={faMoon} />}
            </Btn>
        </>
    );
};