export function BlogContentSection({ header, para }) {
  return (
    <section className="my-6 text-slate-900">
      <h2 className="mb-3 text-2xl font-semibold ">{header}</h2>
      <p className="leading-loose">{para}</p>
    </section>
  );
}
