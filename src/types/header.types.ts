// 📍 src/types/header.types.ts

export type Language = {
  code: 'se' | 'en';
  name: string;
};

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationProps {
  items: NavItem[];
  className?: string;
  variant?: 'desktop' | 'mobile';
  onItemClick?: () => void;
}

export interface NavLinkItemProps {
  item: NavItem;
  variant?: 'desktop' | 'mobile';
  onClick?: () => void;
}

export interface LanguageSwitcherProps {
  languages: Language[];
  current: string;
  onChange: (code: string) => void;
  className?: string;
}

export interface PhoneActionProps {
  phone?: string;
  className?: string;
}

export interface CtaActionProps {
  label?: string;
  href?: string;
  className?: string;
}

export interface SpaderkungLogoProps {
  className?: string;
  squareColor?: string;
  textColor?: string;
  markColor?: string;
}

export interface HeaderProps {
  logoSrc?: string;
  nav: NavItem[];
  phone: string;
  languages: Language[];
  currentLanguage: string;
  onLanguageChange?: (code: string) => void;
  ctaLabel?: string;
  ctaHref?: string;
  socials?: { icon: string; href: string }[];
}