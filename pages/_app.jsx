import { TearWrapper } from "../context/tear";
import { ChakraProvider } from "@chakra-ui/react";

function TheYellowWallpaperApp({ Component, pageProps }) {
    return (
        <TearWrapper>
            <ChakraProvider {...pageProps}>
                <Component {...pageProps} />
            </ChakraProvider>
        </TearWrapper>
    );
}

export default TheYellowWallpaperApp;
