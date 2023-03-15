import type { To } from 'history';
import { pick } from 'ramda';

import { ActionKinds } from '../../../types/action.types';
import { DropdownPlacements } from '../../Dropdown/Dropdown.enums';
import { Placements } from '../../Dropdown/Dropdown.types';

export interface DropdownLinkProps {
  name: string;
  href?: string;
  to?: To;
  onClick: () => void;
}

export const ControlDropdownPlacements = pick([
  'bottom',
  'bottom-start',
  'bottom-end',
])(DropdownPlacements);

export interface DropdownMenuProps {
  actions: ActionKinds<React.MouseEvent[]>[];
  children: React.ReactNode | ((isActive: boolean) => JSX.Element);
  defaultIsOpen?: boolean;
  paneWidth?: 'auto' | number;
  className?: string;
  placement?: Placements;
}
