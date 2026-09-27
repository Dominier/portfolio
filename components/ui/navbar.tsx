import { ThemeToggle } from "./theme-toggle";

export const NavigationBar = () => (
  <header className="site-header">
    <a href="#about" className="wordmark" aria-label="Timothy Le home">tl<span>.</span></a>
    <nav aria-label="Main navigation"><a href="#about">About</a><a href="#projects">Work</a><a href="#experience">Experience</a></nav>
    <div className="header-actions"><ThemeToggle /></div>
  </header>
);
