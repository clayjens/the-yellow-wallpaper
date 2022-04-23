import {
    Container,
    Center,
    Box,
    Heading,
    Divider,
    Link,
    Text,
    Flex,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import React from "react";
import { NavGroup } from "./Navbar";

export default function Hero() {
    const Emphasis = ({ children }) => (
        <Text as="em" color="lightcoral" fontSize="lg" fontWeight="bold">
            {children}
        </Text>
    );

    return (
        <Container maxW="container.md" bg="blackAlpha.700" rounded="lg">
            <Center
                d="flex"
                alignItems="center"
                py="20"
                px="10"
                flexDir="column"
                color="white"
                mt="8"
            >
                <Box>
                    <Heading>The Yellow Wallpaper</Heading>
                </Box>
                <Divider />
                <Box mt="4" fontWeight="medium" fontSize="lg" lineHeight="1.5">
                    <Text as="em" fontSize="2xl" fontWeight="bold" pr="1">
                        &quot;
                    </Text>
                    This wise man put me to bed and applied the{" "}
                    <Emphasis>rest cure</Emphasis>, to which a still-good
                    physique responded so promptly that he concluded there was{" "}
                    <Emphasis>nothing much the matter with me</Emphasis>, and
                    sent me home with solemn advice to &quot;
                    <Emphasis>
                        live as domestic a life as far as possible
                    </Emphasis>
                    ,&quot; to &quot;
                    <Emphasis>
                        have but two hours intellectual life a day
                    </Emphasis>
                    ,&quot; and &quot;
                    <Emphasis>
                        never to touch pen, brush, or pencil again
                    </Emphasis>
                    &quot; as long as I lived.
                    <Text as="em" fontSize="2xl" fontWeight="bold">
                        &quot;
                    </Text>
                </Box>
                <Box mt="4">
                    <Link
                        href="https://www.americanyawp.com/reader/18-industrial-america/charlotte-perkins-gilman-why-i-wrote-the-yellow-wallpaper-1913/"
                        isExternal
                    >
                        <Flex fontSize="xl" fontWeight="light">
                            — Charlotte Perkins Gilman, 1913
                            <Box mt="1" pl="1">
                                <FiExternalLink />
                            </Box>
                        </Flex>
                    </Link>
                </Box>
                <Divider pt="6" />
                <Box pt="8">
                    <NavGroup btnSize="lg" />
                </Box>
            </Center>
        </Container>
    );
}
