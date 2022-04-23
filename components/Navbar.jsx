import { Box, Button, IconButton, Tooltip } from "@chakra-ui/react";
import { FiHome, FiUsers } from "react-icons/fi";
import { useTearContext } from "../context/tear";
import React from "react";
import Link from "next/link";

export default function Navbar() {
    const { torn, setTorn } = useTearContext();

    const handleTearWallpaperButton = () => {
        if (!torn) setTorn(true);
    };

    const NavButton = ({ href, tooltip, icon }) => (
        <Link href={href} passHref>
            <a>
                <Tooltip label={tooltip}>
                    <IconButton
                        icon={icon}
                        variant="solid"
                        colorScheme="yellow"
                        mr="6"
                    />
                </Tooltip>
            </a>
        </Link>
    );

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
                    <Box>
                        <NavButton
                            href="/"
                            tooltip="Home"
                            icon={<FiHome size={20} color="black" />}
                        />
                        <NavButton
                            href="/characters"
                            tooltip="Characters"
                            icon={<FiUsers size={20} color="black" />}
                        />
                    </Box>
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
