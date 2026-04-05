import { useState } from 'react'
import './assets/styles/App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  const [page, setPage] = useState("home");
  const lighten = (hex: string, percent = 0.15) => {
    const num = parseInt(hex.replace("#", ""), 16);
    let r = (num >> 16) + Math.round(255 * percent);
    let g = ((num >> 8) & 0x00ff) + Math.round(255 * percent);
    let b = (num & 0x0000ff) + Math.round(255 * percent);
    r = r > 255 ? 255 : r;
    g = g > 255 ? 255 : g;
    b = b > 255 ? 255 : b;
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, "0")}`;
  };
  const [color, setColor] = useState("#3b5bdb");
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const displayColor = dark ? lighten(color, 0.2) : color;

  const colors = ["#3b5bdb", "#4c6ef5", "#228be6", "#15aabf", "#12b886"];

  return (
    <div className={`min-h-screen flex flex-col items-center justify-start pt-16 pb-16 ${dark ? "bg-[#1e1f24] text-gray-200" : "bg-[#e0e5ec] text-gray-600"}`}>
      {/* Header */}
      <div className="w-full max-w-xl mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
        <a href="#" onClick={(e) => { e.preventDefault(); setPage("home"); }} className="icon" style={{ color: displayColor }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 .5l6 6V15a1 1 0 0 1-1 1H9v-5H7v5H3a1 1 0 0 1-1-1V6.5l6-6z"/>
          </svg>
        </a>

          <button
            onClick={() => setDark(!dark)}
            className="icon"
            style={{ color: displayColor }}
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Color Palette (Dropdown) */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="icon"
            style={{ color: displayColor }}
          >
            🎨
          </button>

          {open && (
            <div
              className="absolute right-0 mt-3 p-3 rounded-xl flex gap-3 neu"
            >
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setColor(c);
                    setOpen(false);
                  }}
                  className="w-6 h-6 rounded-full"
                  style={{
                    background: c,
                    boxShadow: dark
                      ? "6px 6px 12px #141519, -6px -6px 12px #2a2e31"
                      : "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      {page === "home" && (
        <div className="max-w-xl p-10 rounded-2xl neu">
          <div className="flex justify-center mb-6">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="profile"
              className="w-24 h-24 rounded-full object-cover avatar"
            />
          </div>

          <p className="text-lg leading-relaxed">
            Hi, I'm{" "}
            <a href="#" className="link" style={{ color: displayColor }}>
              xxxxxxxxxxx
            </a>
            .
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            I'm a software engineer with{" "}
            <a href="#" className="link" style={{ color: displayColor }}>
              experience
            </a>{" "}
            in full-stack web development using React, TypeScript, Python, and AWS.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            I enjoy learning new things while valuing consistent effort.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            You can follow my daily{" "}
            <a href="#" className="link" style={{ color: displayColor }}>
              goals
            </a>{" "}
            as I work toward a more fulfilling future, and explore my{" "}
            <span
              className="link cursor-pointer"
              style={{ color: displayColor }}
              onClick={() => setPage("photography")}
            >
              photography
            </span>
            , where I capture moments from everyday life.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <span className="text-base text-gray-500">Feel free to check out</span>
            <a href="#" className="icon" style={{ color: displayColor }}>
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: 24 }} />
            </a>
            <a href="#" className="icon" style={{ color: displayColor }}>
              <FontAwesomeIcon icon={faSquareLinkedin} style={{ fontSize: 24 }} />
            </a>
          </div>
        </div>
      )}

      {/* {page === "photography" && (
        <div className="max-w-xl w-full flex gap-4">
          {[300, 250, 280, 220, 320, 280, 310, 240, 290, 230, 315, 245]
            .reduce((acc, height, i) => {
              const colHeights = acc.map(col => col.reduce((sum, item) => sum + item.height, 0));
              const min = Math.min(...colHeights);
              const index = colHeights.indexOf(min);
              acc[index].push({ height, number: i + 1 });
              return acc;
            }, [[], [], []])
            .map((col, i) => (
              <div key={i} className="flex flex-col gap-4 flex-1">
                {col.map(item => (
                  <div
                    key={item.number}
                    className="neu rounded-md flex items-center justify-center"
                    style={{ height: item.height }}
                  >
                    {item.number}
                  </div>
                ))}
              </div>
            ))}
        </div>
      )} */}

      <style>{`
        .neu {
          background: ${dark ? "var(--bg-color-dark)" : "var(--bg-color-light)"};
          box-shadow: ${dark
            ? "var(--box-shadow-dark)"
            : "var(--box-shadow-light)"};
        }

        .link {
          display: inline-block;
          font-size: 1.4em;
          font-weight: 600;
          letter-spacing: 0.03em;
          transition: all 0.2s ease;
        }

        .link:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        .link:active {
          transform: translateY(1px);
          opacity: 0.8;
        }

        .icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: ${dark ? "#1e1f24" : "#e0e5ec"};
          box-shadow: ${dark
            ? "8px 8px 16px #0f1013, -8px -8px 16px #2c2e35"
            : "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff"};
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon:hover {
          transform: translateY(-3px);
          box-shadow: ${dark
            ? "16px 16px 32px #0f1013, -16px -16px 32px #2c2e35"
            : "10px 10px 20px #a3b1c6, -10px -10px 20px #ffffff"};
        }

        .icon:active {
          transform: translateY(0);
          box-shadow: ${dark
            ? "inset 6px 6px 12px #0f1013, inset -6px -6px 12px #2c2e35"
            : "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff"};
        }

        .avatar {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: ${dark ? "#1e1f24" : "#e0e5ec"};
          box-shadow: ${dark
            ? "8px 8px 16px #0f1013, -8px -8px 16px #2c2e35"
            : "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff"};
          padding: 6px;
        }
      `}</style>
    </div>
  );
}
