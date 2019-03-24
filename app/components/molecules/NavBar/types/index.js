// @flow
export type NavItem = { label: string, href: string };

export type Props = {
  className: string,
  items: Array<NavItem>,
};
