type Props = {
  className?: string;
};

export default function ShellMark({ className }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Scallop shell — proper fan shape with hinge at bottom */}

      {/* Outer wavy top edge — scalloped */}
      <path d="
        M 30 70
        Q 35 60 42 68
        Q 49 56 56 66
        Q 63 54 70 64
        Q 77 52 84 62
        Q 91 50 100 60
        Q 109 50 116 62
        Q 123 52 130 64
        Q 137 54 144 66
        Q 151 56 158 68
        Q 165 60 170 70
      " />

      {/* Left side curve down to hinge */}
      <path d="M 30 70 Q 28 110 50 160 Q 75 175 95 170" />

      {/* Right side curve down to hinge */}
      <path d="M 170 70 Q 172 110 150 160 Q 125 175 105 170" />

      {/* Hinge tab at bottom */}
      <path d="M 95 170 Q 100 178 105 170 Q 105 165 100 163 Q 95 165 95 170 Z" />

      {/* Radiating ridges from hinge — center to top */}
      <path d="M 100 168 L 100 60" />

      {/* Left ridges */}
      <path d="M 100 168 Q 92 130 84 62" />
      <path d="M 100 168 Q 84 130 70 64" />
      <path d="M 100 168 Q 76 130 56 66" />
      <path d="M 100 168 Q 68 132 42 68" />
      <path d="M 100 168 Q 60 135 30 70" />

      {/* Right ridges */}
      <path d="M 100 168 Q 108 130 116 62" />
      <path d="M 100 168 Q 116 130 130 64" />
      <path d="M 100 168 Q 124 130 144 66" />
      <path d="M 100 168 Q 132 132 158 68" />
      <path d="M 100 168 Q 140 135 170 70" />
    </svg>
  );
}
