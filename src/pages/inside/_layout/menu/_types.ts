export type MenuItem = {
  label: string;
  path: string;
};

export type MenuTopItem = MenuItem & {
  sub?: MenuItem[];
};

export type TopMenu = MenuTopItem[];