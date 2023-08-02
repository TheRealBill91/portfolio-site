import { Icon } from "./Icon";

export function SocialLinks() {
  const linkedinID = "linkedin";
  return (
    <article className="flex justify-center gap-8 pt-3 sm:py-4 ">
      <a
        href="https://github.com/TheRealBill91"
        target="_blank"
        rel="noreferrer"
        aria-label="Github profile link"
      >
        <Icon className="h-9 w-9 sm:h-10 sm:w-10" id="GithubLogo" />
      </a>
      <a
        href="https://www.linkedin.com/in/william-cummings-jr-b915b2203"
        target="_blank"
        rel="noreferrer"
        aria-label="Linkedin profile link"
      >
        <Icon className="h-9 w-9 sm:h-10 sm:w-10" id={linkedinID} />
      </a>
    </article>
  );
}
