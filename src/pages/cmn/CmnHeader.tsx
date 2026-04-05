import { CmnHeaderInner } from "../../templates/CmnHeaderInner";
import { CmnHeaderList } from "../../organisms/CmnHeaderList";
import { HomeLink } from "../../molecules/HomeLink";

export const CmnHeader = () =>{
  return (
    <CmnHeaderInner>
      <CmnHeaderList>
        <HomeLink />
      </CmnHeaderList>
    </CmnHeaderInner>
  );
};