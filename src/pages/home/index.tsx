import { CmnInner } from "../../templates/CmnInner";
import { Avatar } from "../../molecules/Avatar";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../../utils/ScrollToTop";
import { IconList } from "../../organisms/IconList";
import { IconBtn } from "../../atoms/IconBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { pageInfo } from "../../assets/const";
import data from "../../assets/akilasatolu.json";

export const Home = () => {
  const textBlockCss = "mt-4";
  const textCss = "text-lg leading-relaxed";
  const textLinkCss = "inline-block text-[1.4em] font-semibold tracking-[0.03em]";
  return (
    <CmnInner>
      <Avatar />
      <div className={textBlockCss}>
        <p className={textCss}>{data.home["1-1"]}<Link to={pageInfo[data.home["1-2-1"]]?.path ?? pageInfo.home.path} className={textLinkCss} onClick={ScrollToTop}>{data.home["1-2"]}</Link>{data.home["1-3"]}</p>
      </div>
      <div className={textBlockCss}>
        <p className={textCss}>{data.home["2-1"]}<Link to={pageInfo[data.home["2-2-1"]]?.path ?? pageInfo.home.path} className={textLinkCss} onClick={ScrollToTop}>{data.home["2-2"]}</Link>{data.home["2-3"]}</p>
      </div>
      <div className={textBlockCss}>
        <p className={textCss}>{data.home["3-1"]}</p>
      </div>
      <div className={textBlockCss}>
        <p className={textCss}>{data.home["4-1"]}<Link to={pageInfo[data.home["4-2-1"]]?.path ?? pageInfo.home.path} className={textLinkCss} onClick={ScrollToTop}>{data.home["4-2"]}</Link>{data.home["4-3"]}<Link to={pageInfo[data.home["4-4-1"]]?.path ?? pageInfo.home.path} className={textLinkCss} onClick={ScrollToTop}>{data.home["4-4"]}</Link>{data.home["4-5"]}</p>
      </div>
      <div className={textBlockCss}>
        <p className={`${textCss} flex flex-row items-center text-[var(--color-secondary-light)]`}>{data.home["5-1"]}
          <IconList style="ml-4">
            <IconBtn type="a" href="https://github.com/akilasatolu">
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: 24 }} />
            </IconBtn>
            <IconBtn type="a" href="https://www.linkedin.com/in/shogo-yoshizawa-70794a374">
              <FontAwesomeIcon icon={faSquareLinkedin} style={{ fontSize: 24 }} />
            </IconBtn>
          </IconList>
        </p>
      </div>
    </CmnInner>
  );
}