import { CmnInner } from "../../templates/CmnInner";
import { Avatar } from "../../molecules/Avatar";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../../utils/ScrollToTop";
import { BtnList } from "../../molecules/BtnList";
import { Btn } from "../../atoms/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { pageInfo } from "../../assets/const";
import { useAtomValue } from 'jotai';
import { allDataAtom } from '../../assets/jotai';
import type { HomeData } from '../../assets/types';

export const Home = () => {
  const data: HomeData | undefined = useAtomValue(allDataAtom)?.home;
  const textBlockCss = "mt-4";
  const textCss = "text-lg leading-relaxed";
  const textLinkCss = "inline-block text-[1.4em] font-semibold tracking-[0.03em] ml-1 mr-1";
  return (
    <CmnInner>
      {
        data && 
          <>
            <Avatar />
            <div className={textBlockCss}>
              <p className={textCss}>{data["1-1"]}<Link to={pageInfo[data["1-2-1"]]?.path ?? pageInfo.home.path} className={textLinkCss} onClick={ScrollToTop}>{data["1-2"]}</Link>{data["1-3"]}</p>
            </div>
            <div className={textBlockCss}>
              <p className={textCss}>{data["2-1"]}<Link to={pageInfo[data["2-2-1"]]?.path ?? pageInfo.home.path} className={textLinkCss} onClick={ScrollToTop}>{data["2-2"]}</Link>{data["2-3"]}</p>
            </div>
            <div className={textBlockCss}>
              <p className={textCss}>{data["3-1"]}</p>
            </div>
            <div className={textBlockCss}>
              <p className={textCss}>{data["4-1"]}<Link to={pageInfo[data["4-2-1"]]?.path ?? pageInfo.home.path} className={textLinkCss} onClick={ScrollToTop}>{data["4-2"]}</Link>{data["4-3"]}<Link to={pageInfo[data["4-4-1"]]?.path ?? pageInfo.home.path} className={textLinkCss} onClick={ScrollToTop}>{data["4-4"]}</Link>{data["4-5"]}</p>
            </div>
            <div className={textBlockCss}>
              <div className={`${textCss} flex flex-row flex-wrap gap-x-4 gap-y-3 items-center text-[var(--color-secondary)]`}>
                <p>{data["5-1"]}</p>
                <BtnList type="row">
                  <Btn type="a" href="https://github.com/akilasatolu" shape="circle">
                    <FontAwesomeIcon icon={faGithub} style={{ fontSize: 24 }} />
                  </Btn>
                  <Btn type="a" href="https://www.linkedin.com/in/shogo-yoshizawa-70794a374" shape="circle">
                    <FontAwesomeIcon icon={faSquareLinkedin} style={{ fontSize: 24 }} />
                  </Btn>
                </BtnList>
              </div>
            </div>
          </>
      }
    </CmnInner>
  );
}