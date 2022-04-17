import "../styles/globals.css";
import { TearWrapper } from "../context/tear";

function TheYellowWallpaperApp({ Component, pageProps }) {
    return (
        <TearWrapper>
            <Component {...pageProps} />
        </TearWrapper>
    );
}

export default TheYellowWallpaperApp;
