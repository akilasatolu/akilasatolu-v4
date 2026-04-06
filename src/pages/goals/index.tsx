import { CmnInner } from "../../templates/CmnInner";
import { allDataAtom } from '../../assets/jotai';
import { useAtomValue } from 'jotai';
import type { GoalsData } from '../../assets/types';
import { Accordion } from "../../molecules/Accordion";

export const Goals = () => {
  const data: GoalsData | undefined = useAtomValue(allDataAtom)?.goals;

  return (
    <>
      {data &&
        <CmnInner>
          {data.map(({ year, goals }, i) => (
            <Accordion key={i} title={year} isOpen={i === 0} styles={`${i === 0 ? "" : "mt-6"}`}>
              <ul>
                {goals.map(({ isDone, goal }, n) => (
                  <li key={`${i}-${n}`} className={isDone ? "done" : ""}>
                    {goal}
                  </li>
                ))}
              </ul>
            </Accordion>
          ))}
        </CmnInner>
      }
    </>
  )
}