import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "@/hooks/usePlatforms";

type Props = {
  selectedPlatform: Platform | null;
  onSelectPaltform: (platform: Platform | null) => void;
};

const PlatformSelector = ({ selectedPlatform, onSelectPaltform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map(platform => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPaltform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
