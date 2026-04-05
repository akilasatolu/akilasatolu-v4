import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { IconBtn } from "../atoms/IconBtn";

export const HomeLink = () => {
    return (
        <>
            <IconBtn type="a" internal={true} href="home">
                <FontAwesomeIcon icon={faHouse} />
            </IconBtn>
        </>
    );
};