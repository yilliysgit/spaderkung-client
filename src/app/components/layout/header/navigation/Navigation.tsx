import { ROUTES } from "@/lib/routes/routes";
import type { NavItem, NavigationProps } from "@/types/header.types";
import NavLinkItem from "./NavLinkItem";

// 🇸🇪 Pizzeria-navigering på svenska
export const navigation: NavItem[] = [
  { label: "Hem", href: ROUTES.HOME },          // Home
  { label: "Om oss", href: ROUTES.OM_OSS },     // Over ons
  { label: "Meny", href: ROUTES.MENY },         // Menu
  { label: "Beställ", href: ROUTES.BESTÄLLA },  // Bestellen
  { label: "Boka bord", href: ROUTES.BOKA },    // Reserveren
  { label: "Kontakt", href: ROUTES.KONTAKT },   // Contact
];

const Navigation = ({ 
  items, 
  className = '', 
  variant = 'desktop',
  onItemClick 
}: NavigationProps) => {
  return (
    <nav className={className}>
      {items.map((item) => (
        <NavLinkItem 
          key={item.href} 
          item={item} 
          variant={variant}
          onClick={onItemClick}
        />
      ))}
    </nav>
  );
};

export default Navigation;