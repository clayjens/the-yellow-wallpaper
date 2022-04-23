import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import YellowWallpaper from "./YellowWallpaper";
import Footer from "./Footer";

function Document({ children }) {
    return (
        <Box>
            <Head>
                <title>The Yellow Wallpaper</title>
                <meta
                    name="description"
                    content="A summary and visual representation of The Yellow Wallpaper"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <YellowWallpaper />
            <main>
                <Box position="absolute" left="0" top="0" right="0">
                    <Navbar />
                    {children}
                </Box>
            </main>
            {/* <Box position="absolute" left="0" bottom="100vh" right="0">
                <Footer />
            </Box> */}
        </Box>
    );
}

export default Document;
