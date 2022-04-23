import { Box, Button, IconButton, Tooltip } from "@chakra-ui/react";
import { FiAlertCircle, FiBook, FiHome, FiUsers } from "react-icons/fi";
import { useTearContext } from "../context/tear";
import React from "react";
import Link from "next/link";

function NavButton({
    href = "#",
    tooltip = "Placeholder",
    icon = <FiAlertCircle size="20" />,
    size = "md",
}) {
    return (
        <Link href={href} passHref>
            <a>
                <Tooltip label={tooltip}>
                    <IconButton
                        icon={icon}
                        variant="solid"
                        colorScheme="yellow"
                        mr="6"
                        size={size}
                    />
                </Tooltip>
            </a>
        </Link>
    );
}

export function NavGroup({ btnSize = "md" }) {
    const iconSize = btnSize === "lg" ? 28 : 20;

    return (
        <Box>
            <NavButton
                href="/"
                tooltip="Home"
                icon={<FiHome size={iconSize} color="black" />}
                size={btnSize}
            />
            <NavButton
                href="/characters"
                tooltip="Characters"
                icon={<FiUsers size={iconSize} color="black" />}
                size={btnSize}
            />
            <NavButton
                href="/summary"
                tooltip="Summary"
                icon={<FiBook size={iconSize} color="black" />}
                size={btnSize}
            />
        </Box>
    );
}

export default function Navbar() {
    const { torn, setTorn } = useTearContext();

    const handleTearWallpaperButton = () => {
        if (!torn) setTorn(true);
    };

    return (
        <Box bg="blackAlpha.700" py="2">
            <header>
                <Box
                    d="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    ml="6"
                    mr="6"
                >
                    <NavGroup />
                    <Box>
                        {!torn && (
                            <Button
                                variant="solid"
                                colorScheme="yellow"
                                onClick={handleTearWallpaperButton}
                            >
                                Tear The Wallpaper
                            </Button>
                        )}
                    </Box>
                </Box>
            </header>
        </Box>
    );
}
