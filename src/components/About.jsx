import { SocialLinks } from "./SocialLinks";

export function About() {
  return (
    <section className="p-4 outline outline-black">
      <h2 className="py-2 text-center text-2xl font-bold">About me</h2>
      <p className="pt-2 text-center leading-6">
        Some random text about me. Some random text about me. Some random text
        about me.Some random text about me.Some random text about me.Some random
        text about me. Some random text about me. Some random text about me.
        Some random text about me.
      </p>
      <SocialLinks />
    </section>
  );
}
