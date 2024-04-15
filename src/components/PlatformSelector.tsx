import usePlatforms, { Platform } from "@/hooks/usePlatforms";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

type Props = {
  selectedPlatformId?: number;
  onSelectPaltform: (platform: Platform) => void;
};

const PlatformSelector = ({ selectedPlatformId, onSelectPaltform }: Props) => {
  const { data } = usePlatforms();
  const platform = data?.results.find(
    platform => platform.id === selectedPlatformId
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map(platform => (
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
