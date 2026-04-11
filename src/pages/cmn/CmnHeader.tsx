import { CmnHeaderInner } from "../../templates/CmnHeaderInner";
import { BtnList } from "../../molecules/BtnList";
import { HomeLink } from "../../molecules/HomeLink";
import { ModeColor } from "../../molecules/ModeColor";
import { ThemeColor } from "../../molecules/ThemeColor";
import { LanguageSetting } from "../../molecules/LanguageSetting";

export const CmnHeader = () =>{
  return (
    <CmnHeaderInner>
      <BtnList type="row">
        <HomeLink />
        <LanguageSetting />
        <ModeColor />
        <ThemeColor />
      </BtnList>
    </CmnHeaderInner>
  );
};