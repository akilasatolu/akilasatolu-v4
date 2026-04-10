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
                {goals.map(({ progress, goal }, n) => (
                  <li
                    key={`${i}-${n}`}
                    className={`flex items-center gap-3 max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-2 px-3 py-3 relative ${n !== 0 ? "before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] before:content-[''] before:[box-shadow:inset_0_1px_2px_rgba(163,177,198,0.8),inset_0_-1px_2px_rgba(255,255,255,0.7)]" : ""}`}
                  >
                    <div className="flex items-center gap-2 pr-2 max-[480px]:w-full max-[480px]:justify-between">
                      <div className="w-17.5 h-2 rounded-[10px] overflow-hidden [box-shadow:inset_2px_2px_4px_#A3B1C6,inset_-2px_-2px_4px_#FFFFFF] max-[480px]:w-full">
                        <div className="h-full rounded-[10px] transition-[width,background] duration-[600ms] ease-in-out" style={{width: `${progress}%`,background: `linear-gradient(90deg, color-mix(in srgb, var(--color-accent), white 40%), var(--color-accent))`}}/>
                      </div>
                      <span className="w-7.5 text-xs">{progress}%</span>
                    </div>
                    <span>{goal}</span>
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