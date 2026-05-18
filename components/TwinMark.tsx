type Props = {
  className?: string;
};

export default function TwinMark({ className }: Props) {
  return (
    <svg
      viewBox="0 0 44 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      className={className}
      aria-label="Twin sisters"
    >
      {/* Roman numeral II — twin signature */}
      {/* First I */}
      <line x1="14" y1="6" x2="14" y2="26" />
      <line x1="10" y1="6" x2="18" y2="6" />
      <line x1="10" y1="26" x2="18" y2="26" />

      {/* Second I */}
      <line x1="30" y1="6" x2="30" y2="26" />
      <line x1="26" y1="6" x2="34" y2="6" />
      <line x1="26" y1="26" x2="34" y2="26" />
    </svg>
  );
}
