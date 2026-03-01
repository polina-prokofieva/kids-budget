import type { TopMenu } from "./_types";

export const TOP_MENU: TopMenu = [
  {
    label: 'Profile',
    path: '/profile',
  },
  {
    label: 'Settings',
    path: '/settings',
  }
] as const;
