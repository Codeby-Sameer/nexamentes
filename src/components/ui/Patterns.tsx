export function DotPattern({ className }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 z-0 pointer-events-none h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] ${className || ''}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="dot-pattern"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x="0"
          y="0"
        >
          <circle id="pattern-circle" cx="2" cy="2" r="1.5" className="fill-white/30" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#dot-pattern)" />
    </svg>
  );
}

export function GridPattern({ className }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 z-0 pointer-events-none h-full w-full stroke-white/15 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)] ${className || ''}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x="-1"
          y="-1"
        >
          <path d="M.5 40V.5H40" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)" />
    </svg>
  );
}
