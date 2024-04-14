import logo from "@/assets/logo.webp";
import ColorModeSwitch from "@/components/ColorModeSwitch";
import SearchInput from "@/components/SearchInput";
import { HStack, Image } from "@chakra-ui/react";

type Props = {
  onSearch: (searchText: string) => void;
};

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="64px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
