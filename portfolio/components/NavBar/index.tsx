export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <a href="/">
              <span className="fa-solid fa-laptop-code" aria-hidden="true"></span> Peacover
            </a>
          </h1>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/peacover/" target="_blank">
            <span
              className="fa-brands fa-linkedin test"
              aria-hidden="true"
            ></span>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/peacover/">
            <span
              className="fa-brands fa-square-github"
              aria-hidden="true"
            ></span>
            <span className="sr-only">GitHub</span>
          </a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
};
