import React from 'react';
import { Avatar, AvatarProps } from '@chakra-ui/react';

interface ChakraAvatarProps extends AvatarProps {
    name: string
}

const ChakraAvatar: React.FC<ChakraAvatarProps> = ({ name, src, ...rest }) => {
  return <Avatar name={name} src={src} size="md" className="w-10 h-10 border-2 border-solid border-sky-500 rounded-full" {...rest} />;
};

export default ChakraAvatar;
