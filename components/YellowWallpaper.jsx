import React from "react";
import { Image, Box } from "@chakra-ui/react";
import { useTearContext } from "../context/tear";
import assets from "../assets";

function YellowWallpaper() {
    const { torn } = useTearContext();

    return (
        <Box
            position="relative"
            top="0"
            bottom="0"
            right="0"
            left="0"
            height="100vh"
            zIndex="-1"
        >
            <Image
                w="100%"
                h="100%"
                objectFit="cover"
                src={torn ? assets.wallpapers.torn : assets.wallpapers.untorn}
                alt=""
            />
        </Box>
    );
}

export default YellowWallpaper;
