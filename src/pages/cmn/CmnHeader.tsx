import { CmnHeaderInner } from "../../templates/CmnHeaderInner";
import { BtnList } from "../../molecules/BtnList";
import { HomeLink } from "../../molecules/HomeLink";
import { ThemeColor } from "../../molecules/ThemeColor";
import { ThemeColorAccent } from "../../molecules/ThemeColorAccent";

export const CmnHeader = () =>{
  return (
    <CmnHeaderInner>
      <BtnList type="row">
        <HomeLink />
        <ThemeColor />
        <ThemeColorAccent />
      </BtnList>
    </CmnHeaderInner>
  );
};