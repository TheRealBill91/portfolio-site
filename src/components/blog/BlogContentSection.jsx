export function BlogContentSection({ header, para }) {
  return (
    <section className="my-6 max-w-[600px] text-slate-900 dark:text-slate-100">
      <h2 className="mb-3 text-2xl font-semibold  ">{header}</h2>
      <p className="leading-loose">{para}</p>
    </section>
  );
}
