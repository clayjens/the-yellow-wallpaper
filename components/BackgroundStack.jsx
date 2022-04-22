import React from "react";
import { Stack } from "@chakra-ui/react";
import { useTearContext } from "../context/tear";

export default function BackgroundStack({ children }) {
    const { torn } = useTearContext();

    return (
        <Stack
            backgroundImage={
                torn ? "url('wallpaper_torn.jpg')" : "url('wallpaper.jpg')"
            }
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            minHeight="100vh"
        >
            {children}
        </Stack>
    );
}
