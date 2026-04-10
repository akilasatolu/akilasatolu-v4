import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { themeColorAccentAtom } from '../assets/jotai';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { IconBtn } from "../atoms/IconBtn";
import { SetLS } from "../utils/UseLocalStorage";
import { DropDownList } from '../atoms/DropDownList';
import { DropDownItem } from '../atoms/DropDownItem';

export const ThemeColorAccent = () => {
    const setColorAccent = useSetAtom(themeColorAccentAtom);
    const [open, setOpen] = useState(false);
    const afterClickAction = (selectedColor: string) => {
        setOpen(prev => !prev);
        setColorAccent(selectedColor);
        SetLS('accent', selectedColor);
    };
    return (
        <>
            <div className='relative'>
                <IconBtn type="button" onClick={() => { setOpen(!open) }}>
                    <FontAwesomeIcon icon={faPalette} />
                </IconBtn>
                {open && 
                <DropDownList styles='-left-0.5'>
                    <DropDownItem selectedValue='blue' clickAction={afterClickAction}><span className='w-[16px] h-[16px] bg-[var(--color-accent-blue)] rounded-md'></span></DropDownItem>
                    <DropDownItem selectedValue='green' clickAction={afterClickAction}><span className='w-[16px] h-[16px] bg-[var(--color-accent-green)] rounded-md'></span></DropDownItem>
                    <DropDownItem selectedValue='pink' clickAction={afterClickAction}><span className='w-[16px] h-[16px] bg-[var(--color-accent-pink)] rounded-md'></span></DropDownItem>
                </DropDownList>}
            </div>
        </>
    );
};
