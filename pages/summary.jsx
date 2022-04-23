import {
    Container,
    Center,
    Box,
    Heading,
    Divider,
    Text,
    Link,
    Flex,
} from "@chakra-ui/react";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import Document from "../components/Document";

function Summary() {
    return (
        <Document>
            <Container maxW="container.lg" bg="blackAlpha.700" rounded="lg">
                <Center
                    d="flex"
                    alignItems="center"
                    py="10"
                    px="5"
                    flexDir="column"
                    color="white"
                    mt="8"
                >
                    <Box>
                        <Center flexDir="column">
                            <Heading>The Yellow Wallpaper — Summary</Heading>
                            <Link
                                href="https://www.sparknotes.com/lit/yellowwallpaper/summary/"
                                isExternal
                            >
                                <Flex fontSize="xl">
                                    Sparknotes Summary Page
                                    <Box mt="1" pl="1">
                                        <FiExternalLink />
                                    </Box>
                                </Flex>
                            </Link>
                        </Center>
                    </Box>
                    <Divider />
                    <Box mt="4" fontSize="xl" fontWeight="light" lineHeight="2">
                        The unnamed Narrator journals about a summer house her
                        husband had rented. Claiming that the house is
                        mysterious, the Narrator mentions that she suffers from
                        a mental illness called Nervous Depression. The Narrator
                        is also frustrated that her husband and doctor, John,
                        misunderstands and underestimates the Narrator&apos;s
                        condition. Forced to reside in the upstairs nursery room
                        of the summer house, the Narrator uses the
                        aforementioned journal to free her mind. However, the
                        Narrator is forbidden from writing.
                        <br />
                        The Narrator feels uneasy about the decoration in the
                        Nursery, stating that the yellow wallpaper is
                        &quot;revolting.&quot;
                        <br />
                        Any attempt made by the Narrator to leave the
                        now-taunting yellow-colored nursery is futile due to
                        John&apos;s persistence. The yellow wallpaper is now
                        taunting and causing the Narrator to rapidly
                        deteriorate. Eventually, the Narrator is overwhelmed by
                        the yellow wallpaper. Now seeing a woman trapped behind
                        the wallpaper, the Narrator believes that she is the
                        woman. John sees the Narrator&apos;s state and collapses
                        into a faint.
                    </Box>
                </Center>
            </Container>
        </Document>
    );
}

export default Summary;
