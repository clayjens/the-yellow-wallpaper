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
import { FiLink } from "react-icons/fi";
import React from "react";

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
                <Box mt="4" fontWeight="medium" fontSize="lg">
                    &quot;This wise man put me to bed and applied the{" "}
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
                    &quot; as long as I lived.&quot;
                </Box>
                <Box mt="4">
                    <Link
                        href="https://www.americanyawp.com/reader/18-industrial-america/charlotte-perkins-gilman-why-i-wrote-the-yellow-wallpaper-1913/"
                        isExternal
                    >
                        <Flex>
                            — Charlotte Perkins Gilman, 1913
                            <Box mt="1" pl="1">
                                <FiLink />
                            </Box>
                        </Flex>
                    </Link>
                </Box>
            </Center>
        </Container>
    );
}
