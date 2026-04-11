import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { languageAtom } from '../assets/jotai';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { Btn } from "../atoms/Btn";
import { SetLS } from "../utils/UseLocalStorage";
import { Modal } from '../organisms/Modal';
import { BtnList } from './BtnList';

export const LanguageSetting = () => {
    const setLang = useSetAtom(languageAtom);
    const [open, setOpen] = useState(false);
    const afterClickAction = (selectedLang: string) => {
        setOpen(prev => !prev);
        setLang(selectedLang);
        SetLS('lang', selectedLang);
    };
    return (
        <>
            <Btn type="button" onClick={() => { setOpen(!open) }} shape="circle">
                <FontAwesomeIcon icon={faLanguage} />
            </Btn>
            {open && 
                <Modal onClose={() => setOpen(false)} title='Select Language'>
                    <BtnList type="row" style='justify-center'>
                        <Btn type="button" onClick={() => afterClickAction('en')} shape='square'>
                            <span>English</span>
                        </Btn>
                        <Btn type="button" onClick={() => afterClickAction('ja')} shape='square'>
                            <span>日本語</span>
                        </Btn>
                        <Btn type="button" onClick={() => afterClickAction('kr')} shape='square'>
                            <span>한국어</span>
                        </Btn>
                    </BtnList>
                </Modal>
            }
        </>
    );
};
