import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Btn } from "../atoms/Btn";

export const HomeLink = () => {
    return (
        <>
            <Btn type="a" internal={true} href="home" shape="circle" label="Home">
                <FontAwesomeIcon icon={faHouse} />
            </Btn>
        </>
    );
};