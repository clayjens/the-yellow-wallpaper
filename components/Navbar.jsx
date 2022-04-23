import {
    Box,
    Button,
    HStack,
    IconButton,
    Spacer,
    Text,
} from "@chakra-ui/react";
import { FiHome, FiFile, FiFileText } from "react-icons/fi";
import { useTearContext } from "../context/tear";
import React from "react";
import Router from "next/router";
import Link from "next/link";

export default function Navbar() {
    const { torn, setTorn } = useTearContext();

    const handleHomeButton = () => {
        setTorn(false);
        Router.push("/");
    };

    return (
        <HStack m="2">
            <IconButton
                icon={<FiHome color="black" size="25" />}
                bg="gold"
                shadow="md"
                onClick={handleHomeButton}
            />
            <Spacer />
            {!torn && (
                <Button
                    bg="gold"
                    onClick={() => setTorn(true)}
                    shadow="lg"
                    leftIcon={<FiFile />}
                >
                    Tear The Wallpaper
                </Button>
            )}
            {torn && (
                <Link href="/treatment" passHref>
                    <a>
                        <Button
                            bg="gold"
                            onClick={() => {}}
                            shadow="lg"
                            leftIcon={<FiFileText />}
                        >
                            Treatment
                        </Button>
                    </a>
                </Link>
            )}
        </HStack>
    );
}
