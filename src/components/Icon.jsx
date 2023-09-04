import icons from "../assets/icons.svg";

export function Icon({ id, className }) {
  return (
    <svg className={className}>
      <use href={`${icons}#${id}`} />
    </svg>
  );
}
