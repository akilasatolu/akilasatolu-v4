import { CmnInner } from "../../templates/CmnInner";
import { useAtomValue } from 'jotai';
import { allDataAtom } from '../../assets/jotai';
import type { ExperienceData } from '../../assets/types';

export const Experience = () => {
  const data: ExperienceData | undefined = useAtomValue(allDataAtom)?.experience;

  return (
    <>
      {data && 
        <CmnInner>
          {data.map((pj, index) => (
            <div key={index}>
              <div className="inu p-6 rounded-2xl">
                <p className="text-[var(--color-secondary-light)] text-sm">{pj.pjPeriod.join(" - ")}</p>
                <div className="mt-1 text-xl font-bold">
                  {pj.pjTitle}
                </div>
                <p className="mt-2 text-[var(--color-secondary-light)] leading-relaxed">
                  {pj.pjDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {pj.pjTechList.map((t, idx) => (
                    <span key={idx} className="rounded-lg text-[var(--color-accent-blue)] [box-shadow:3px_3px_6px_#a3b1c6,-3px_-3px_6px_#ffffff] text-xs px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {index !== data.length - 1 && (
                <div className="flex justify-center py-8">
                  <div className="flex flex-col items-center gap-1">
                    {Array.from({ length: 8 }).map((_, idx) => (
                      <span key={idx}
                            style={{transform: `translateX(${Math.sin((idx / 8) * Math.PI * 2) * 6}px)`}}
                            className={`w-1 h-1 rounded-full [box-shadow:inset_1px_1px_2px_#a3b1c6,inset_-1px_-1px_2px_#ffffff]`} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </CmnInner>
      }
    </>
  )
}