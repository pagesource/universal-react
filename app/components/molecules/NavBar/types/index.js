// @flow
import type { Node } from 'react';

export type NavItem = { label: string, href: string };

export type Props = {
  className: string,
  children?: Node,
  items?: Array<NavItem>,
};
