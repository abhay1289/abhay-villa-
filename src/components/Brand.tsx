export function Brand({
  className,
}: {
  className?: string;
}) {
  return (
    <span className={className}>
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <path
          d="M7.2 22.4 4 16.8 14 4.2 24 16.8l-3.2 5.6H7.2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M10.2 22.4V14.8h7.6v7.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
      Abhay Villa
    </span>
  );
}
