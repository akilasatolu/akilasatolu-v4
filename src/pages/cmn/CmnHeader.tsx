import { CmnHeaderInner } from "../../templates/CmnHeaderInner";
import { BtnList } from "../../molecules/BtnList";
import { HomeLink } from "../../molecules/HomeLink";
import { ModeColor } from "../../molecules/ModeColor";
import { ThemeColorAccent } from "../../molecules/ThemeColorAccent";

export const CmnHeader = () =>{
  return (
    <CmnHeaderInner>
      <BtnList type="row">
        <HomeLink />
        <ModeColor />
        <ThemeColorAccent />
      </BtnList>
    </CmnHeaderInner>
  );
};