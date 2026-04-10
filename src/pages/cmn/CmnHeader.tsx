import { CmnHeaderInner } from "../../templates/CmnHeaderInner";
import { IconList } from "../../organisms/IconList";
import { HomeLink } from "../../molecules/HomeLink";
import { ThemeColor } from "../../molecules/ThemeColor";
import { ThemeColorAccent } from "../../molecules/ThemeColorAccent";

export const CmnHeader = () =>{
  return (
    <CmnHeaderInner>
      <IconList>
        <HomeLink />
        <ThemeColor />
        <ThemeColorAccent />
      </IconList>
    </CmnHeaderInner>
  );
};