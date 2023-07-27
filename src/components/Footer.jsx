import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="p-6 flex flex-col items-center gap-4">
      <h2 className="font-bold text-lg text-center pt-3" >Contact Me</h2>
      <p className="mx-4 text-center leading-7">
        If your interested in working with someone dedicated to web development
        and providing value to customers, please get in touch
      </p>
      <p>Email: emailplaceholder</p>
      <SocialLinks />
    </footer>
  );
}
