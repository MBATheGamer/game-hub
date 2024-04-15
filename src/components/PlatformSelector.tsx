import usePlatform from "@/hooks/usePlatform";
import usePlatforms, { Platform } from "@/hooks/usePlatforms";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

type Props = {
  selectedPlatformId?: number;
  onSelectPaltform: (platform: Platform) => void;
};

const PlatformSelector = ({ selectedPlatformId, onSelectPaltform }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
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
