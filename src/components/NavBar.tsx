import logo from "@/assets/logo.webp";
import ColorModeSwitch from "@/components/ColorModeSwitch";
import SearchInput from "@/components/SearchInput";
import { HStack, Image } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="64px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
