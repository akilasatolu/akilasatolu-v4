import { CmnHeaderInner } from "../../templates/CmnHeaderInner";
import { IconList } from "../../organisms/IconList";
import { HomeLink } from "../../molecules/HomeLink";

export const CmnHeader = () =>{
  return (
    <CmnHeaderInner>
      <IconList>
        <HomeLink />
      </IconList>
    </CmnHeaderInner>
  );
};