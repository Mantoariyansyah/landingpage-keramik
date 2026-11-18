/** Ikon inline dari desain Figma (dipertahankan persis). */

export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={diagonal ? "M7 17 17 7M7 7h10v10" : "M5 12h14m-5-5 5 5-5 5"}
      />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 3.5A11.8 11.8 0 0 0 1.95 17.73L.28 23.85l6.26-1.64A11.77 11.77 0 0 0 12.17 23h.01A11.83 11.83 0 0 0 20.5 3.5Zm-8.32 17.51c-1.74 0-3.45-.47-4.94-1.35l-.36-.21-3.72.98.99-3.63-.23-.37a9.82 9.82 0 1 1 8.26 4.58Zm5.39-7.36c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.76.96-.94 1.16-.17.2-.34.22-.64.07-.29-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3-.02-.45.13-.6.13-.13.3-.34.44-.52.15-.17.2-.3.3-.49.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.91-2.19-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.56-.35Z" />
    </svg>
  );
}
