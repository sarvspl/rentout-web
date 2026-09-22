/** Inline SVG icons used across the landing page. No icon dependency. */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M2.5 3h2.2l2.3 11.2a1.8 1.8 0 0 0 1.8 1.4h8.5a1.8 1.8 0 0 0 1.8-1.4L21 7H6" />
      <circle cx="9.5" cy="20" r="1.4" />
      <circle cx="17.5" cy="20" r="1.4" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 2.8 5 5.6v5.9c0 4.2 2.9 8.1 7 9.7 4.1-1.6 7-5.5 7-9.7V5.6z" />
      <circle cx="12" cy="10.6" r="1.9" />
      <path d="M12 12.6v2.6" />
    </svg>
  );
}

export function MegaphoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 10v4a2 2 0 0 0 2 2h1.5L15 20V4L7.5 8H6a2 2 0 0 0-2 2Z" />
      <path d="M18.5 8.5a5 5 0 0 1 0 7" />
      <path d="M7.5 16v4" />
    </svg>
  );
}

export function HeadphonesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 14v-2a8 8 0 1 1 16 0v2" />
      <path d="M4 14h2.4a1.4 1.4 0 0 1 1.4 1.4v3.2A1.4 1.4 0 0 1 6.4 20H5.4A1.4 1.4 0 0 1 4 18.6Z" />
      <path d="M20 14h-2.4a1.4 1.4 0 0 0-1.4 1.4v3.2A1.4 1.4 0 0 0 17.6 20h1A1.4 1.4 0 0 0 20 18.6Z" />
    </svg>
  );
}

export function HeartIcon({ filled, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      {...base}
      fill={filled ? "currentColor" : "none"}
      strokeWidth={filled ? 0 : 1.8}
      {...props}
    >
      <path d="M12 20.3 4.6 13a4.7 4.7 0 0 1 0-6.7 4.7 4.7 0 0 1 6.7 0l.7.7.7-.7a4.7 4.7 0 0 1 6.7 0 4.7 4.7 0 0 1 0 6.7Z" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M15 5 8 12l7 7" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={2.2} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function MinusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={2.2} {...props}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.6 6.4c-3 1.2-4.8 3.6-4.8 7 0 2.7 1.5 4.4 3.7 4.4 1.9 0 3.3-1.4 3.3-3.2 0-1.8-1.2-3.1-2.9-3.1-.3 0-.7 0-1 .2.4-1.5 1.6-2.7 3.2-3.4Zm9 0c-3 1.2-4.8 3.6-4.8 7 0 2.7 1.5 4.4 3.7 4.4 1.9 0 3.3-1.4 3.3-3.2 0-1.8-1.2-3.1-2.9-3.1-.3 0-.7 0-1 .2.4-1.5 1.6-2.7 3.2-3.4Z" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M15.2 12v1.4a2 2 0 0 0 4 0V12" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={2} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={2} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.41-.12-2.38 0-4.02 1.46-4.02 4.13V9.9H7.5V13h2.77v8z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GoogleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.2 10.6v2.9h4.1c-.17 1.06-1.23 3.1-4.1 3.1a4.6 4.6 0 1 1 0-9.2c1.4 0 2.35.6 2.9 1.12l2.1-2.02A7.4 7.4 0 1 0 12.2 19.6c4.28 0 7.1-3 7.1-7.24 0-.5-.05-.86-.12-1.23z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.2 3.5h2.9l-6.3 7.2 7.4 9.8h-5.8l-4.5-5.9-5.2 5.9H2.8l6.7-7.7L2.4 3.5h5.9l4.1 5.4zm-1 14.7h1.6L7.9 5.2H6.2z" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.9 8.6H4V20h2.9zM5.45 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4M20 13.4c0-3-1.6-4.9-4.1-4.9-1.5 0-2.4.7-2.9 1.5V8.6H10.1V20H13v-6c0-1.4.7-2.3 1.9-2.3s1.8.9 1.8 2.3v6H20z" />
    </svg>
  );
}

export const socialIcons: Record<string, (props: IconProps) => React.JSX.Element> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  google: GoogleIcon,
  x: XIcon,
  linkedin: LinkedinIcon,
};

export const serviceIcons: Record<string, (props: IconProps) => React.JSX.Element> = {
  cart: CartIcon,
  shield: ShieldIcon,
  megaphone: MegaphoneIcon,
  headphones: HeadphonesIcon,
};

export function AppleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.15-2.7.8-3.4.8-.7 0-1.8-.8-2.9-.78-1.5.02-2.9.87-3.65 2.2-1.57 2.7-.4 6.7 1.12 8.9.75 1.07 1.63 2.28 2.8 2.23 1.12-.04 1.55-.72 2.9-.72 1.35 0 1.73.72 2.9.7 1.2-.02 1.96-1.09 2.7-2.17.85-1.24 1.2-2.45 1.22-2.51-.03-.01-2.34-.9-2.36-3.55z" />
      <path d="M14.3 6.3c.6-.74 1.02-1.77.9-2.8-.88.04-1.95.59-2.58 1.32-.56.65-1.05 1.7-.92 2.7.98.08 1.98-.5 2.6-1.22z" />
    </svg>
  );
}

/** The Play triangle, drawn as one shape: this is a footer badge, not a logo. */
export function PlayStoreIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.4 2.6a1 1 0 0 0-.5.88v17.04a1 1 0 0 0 .5.88l9.35-9.4zM15.1 10.6 5.9 1.9l9.6 5.5zM16.9 12l3.1-1.77c.7-.4.7-1.4 0-1.8L17.3 6.7l-2.2 2.2zM5.9 22.1l9.2-8.7 2.2 2.2z" />
    </svg>
  );
}
