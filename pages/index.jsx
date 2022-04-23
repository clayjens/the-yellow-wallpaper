import Head from "next/head";
import React from "react";
import { VStack, Container, Box } from "@chakra-ui/react";
import { useTearContext } from "../context/tear";
import HeroCard from "../components/HeroCard";
import BackgroundStack from "../components/BackgroundStack";
import DoorButton from "../components/DoorButton";

export default function Home() {
    const { torn, setTorn } = useTearContext();

    return (
        <div>
            <Head>
                <title>The Yellow Wallpaper</title>
                <meta
                    name="description"
                    content="A visual representation of The Yellow Wallpaper"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BackgroundStack>
                <Box>
                    <Container>
                        <HeroCard />
                    </Container>
                    <VStack>
                        <DoorButton />
                    </VStack>
                </Box>
            </BackgroundStack>
        </div>
    );
}
