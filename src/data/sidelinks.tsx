import { IconChecklist, IconLayoutDashboard } from '@tabler/icons-react';
import { UserCog, BadgeInfo, Users, ClipboardCheck, HandPlatter, LayoutDashboard } from 'lucide-react';

export interface NavLink {
  title: string;
  label?: string;
  href: string;
  icon?: JSX.Element;
}

export interface SideLink extends NavLink {
  sub?: NavLink[];
}

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: '/',
    icon: <LayoutDashboard size={20} />,
  },

  {
    title: 'Users',
    label: '',
    href: '/users',
    icon: <UserCog size={20} />,
  },
  {
    title: 'Organisations',
    label: '',
    icon: <Users size={20} />,
    href: '/organisations',
  },
  {
    title: 'Drugs',
    label: '',
    href: '/drugs',
    icon: <Users size={20} />,
  },
  {
    title: 'Reservations',
    label: '',
    href: '/reservations',
    icon: <Users size={20} />,
  },
];
