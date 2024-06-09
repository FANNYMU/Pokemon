import { useEffect } from 'react';

export default function Themes() {
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      document.documentElement.className = storedTheme;
    }
  }, []);

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    document.documentElement.className = selectedTheme;
    localStorage.setItem('theme', selectedTheme);
  };

  return (
    <>
      {/* themes */}

      <div className="dropdown mr-36">
        <div tabIndex={0} role="button" className="btn">
          Theme
          <svg
            width="12px"
            height="12px"
            className="h-2 w-2 fill-current opacity-60 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
        >
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Default"
              value="default"
              onChange={handleThemeChange}
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Retro"
              value="retro"
              onChange={handleThemeChange}
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Cyberpunk"
              value="cyberpunk"
              onChange={handleThemeChange}
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Valentine"
              value="valentine"
              onChange={handleThemeChange}
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Aqua"
              value="aqua"
              onChange={handleThemeChange}
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="synthwave"
              value="synthwave"
              onChange={handleThemeChange}
            />
          </li>
        </ul>
      </div>
    </>
  );
}