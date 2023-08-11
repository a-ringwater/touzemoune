import React from 'react';
import ChakraAvatar from '../common/ChakraAvatar';
import NavMenu from '../common/MenuButton';

const Header: React.FC = () => (
  <header>
    <div>
      <h1 className="text-3xl font-bold underline">Touzemoune</h1>
 
      <ChakraAvatar name="YZ" src="path-to-image.jpg" />
      <NavMenu />
    </div>
  </header>
);

export default Header;
