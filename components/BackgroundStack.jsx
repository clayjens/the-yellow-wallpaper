import React from "react";
import Navbar from "./Navbar";
import { Stack, Box } from "@chakra-ui/react";
import { useTearContext } from "../context/tear";
import Footer from "./Footer";

export default function BackgroundStack({ children }) {
    const { torn } = useTearContext();

    return (
        <Stack
            backgroundImage={
                torn ? "url('wallpaper_torn.jpg')" : "url('wallpaper.jpg')"
            }
            bgRepeat="no-repeat"
            bgPos="center"
            backgroundSize="cover"
            minHeight="100vh"
        >
            <Navbar />
            <Box>{children}</Box>
            <Footer />
        </Stack>
    );
}
