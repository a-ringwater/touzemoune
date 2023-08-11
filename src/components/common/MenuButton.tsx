import React from 'react';
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { AddIcon, HamburgerIcon } from '@chakra-ui/icons';

const NavMenu: React.FC = () => {
  return <Menu>
    <MenuButton
      as={IconButton}
      aria-label='Options'
      icon={<HamburgerIcon />}
      variant='outline'
    />
    <MenuList>
      <MenuItem icon={<AddIcon />}>
      New Tab
      </MenuItem>
    </MenuList>
  </Menu>;
};

export default NavMenu;
