import React from "react";
import { Button } from "@chakra-ui/react";
import { useTearContext } from "../context/tear";
import { FiFile } from "react-icons/fi";

export default function TearWallpaperButton() {
    const { setTorn } = useTearContext();

    return (
        <Button
            colorScheme="yellow"
            onClick={() => setTorn(true)}
            shadow="lg"
            aria-label="Tear Wallpaper"
            leftIcon={<FiFile />}
        >
            Tear The Wallpaper
        </Button>
    );
}
