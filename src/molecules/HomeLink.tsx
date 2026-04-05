import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { pageInfo } from "../assets/const";
import { ScrollToTop } from "../utils/ScrollToTop";

export const HomeLink = () => {
    return (
        <>
            <Link to={pageInfo.home.path} className="neu icon__btn" onClick={ScrollToTop}>
                <FontAwesomeIcon icon={faHouse} />
            </Link>
        </>
    );
};