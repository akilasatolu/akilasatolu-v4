import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { themeColorAtom } from '../assets/jotai';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { Btn } from "../atoms/Btn";
import { SetLS } from "../utils/UseLocalStorage";
import { Modal } from '../organisms/Modal';
import { BtnList } from './BtnList';

export const ThemeColor = () => {
    const setColor = useSetAtom(themeColorAtom);
    const [open, setOpen] = useState(false);
    const afterClickAction = (selectedColor: string) => {
        setOpen(prev => !prev);
        setColor(selectedColor);
        SetLS('color', selectedColor);
    };
    return (
        <>
            <Btn type="button" onClick={() => { setOpen(!open) }} shape="circle">
                <FontAwesomeIcon icon={faPalette} />
            </Btn>
            {open && 
                <Modal onClose={() => setOpen(false)} title='Select Theme Color'>
                    <BtnList type="row" style='justify-center'>
                        <Btn type="button" onClick={() => afterClickAction('blue')} shape='circle'>
                            <span className='bg-[var(--color-theme-blue)] w-10 h-10 rounded-full'></span>
                        </Btn>
                        <Btn type="button" onClick={() => afterClickAction('green')} shape='circle'>
                            <span className='bg-[var(--color-theme-green)] w-10 h-10 rounded-full'></span>
                        </Btn>
                        <Btn type="button" onClick={() => afterClickAction('pink')} shape='circle'>
                            <span className='bg-[var(--color-theme-pink)] w-10 h-10 rounded-full'></span>
                        </Btn>
                    </BtnList>
                </Modal>
            }
        </>
    );
};
