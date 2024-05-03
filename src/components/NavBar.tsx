import logo from "@/assets/logo.webp";
import ColorModeSwitch from "@/components/ColorModeSwitch";
import SearchInput from "@/components/SearchInput";
import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="64px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
