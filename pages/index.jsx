import Head from "next/head";
import React from "react";
import {
    Button,
    Box,
    Stack,
    VStack,
    HStack,
    Grid,
    GridItem,
    Container,
    Image,
    Tooltip,
    Spacer,
    Center,
    Flex,
} from "@chakra-ui/react";
import { useTearContext } from "../context/tear";
import HeroCard from "../components/HeroCard";
import BackgroundStack from "../components/BackgroundStack";
import { useRouter } from "next/router";
import DoorButton from "../components/DoorButton";
import TearWallpaperButton from "../components/TearWallpaperButton";

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
                <Container>
                    <HeroCard />
                </Container>
                <VStack>
                    <DoorButton />
                </VStack>
            </BackgroundStack>
        </div>
    );
}
