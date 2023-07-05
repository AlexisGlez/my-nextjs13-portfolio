import { Logo } from "./Logo";
import { StyledLink } from "./StyledLink";
import { IconLink } from "./IconLink";
import { ThemeButton } from "./ThemeButton";
import { HamburgerMenu } from "./HamburgerMenu";

export const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <HamburgerMenu />
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <StyledLink href="/" className="mr-4">
            Home
          </StyledLink>
          <StyledLink href="/about" className="mx-4">
            About
          </StyledLink>
          <StyledLink href="/projects" className="mx-4">
            Projects
          </StyledLink>
          <StyledLink href="/articles" className="ml-4">
            Articles
          </StyledLink>
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <IconLink type="GitHub" className="w-6 mx-3" />
          <IconLink type="LinkedIn" className="w-6 mx-3" />
          <IconLink
            type="Pinterest"
            className="w-6 mx-3 bg-light rounded-full"
          />

          <ThemeButton />
        </nav>
      </div>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};
