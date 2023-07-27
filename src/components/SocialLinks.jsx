import { Icon } from "./Icon";

export function SocialLinks() {
  const GITHUB_PROFILE = "https://github.com/TheRealBill91";
  return (
    <article>
      <a
        href="https://github.com/TheRealBill91"
        target="_blank"
        rel="noreferrer"
        aria-label="Github profile9 link"
      >
        <Icon id={GITHUB_PROFILE} />
      </a>
      <a
        href="https://www.linkedin.com/in/william-cummings-jr-b915b2203"
        target="_blank"
        rel="noreferrer"
      >
        Linkedin
      </a>
    </article>
  );
}
