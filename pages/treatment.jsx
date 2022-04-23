import React from "react";
import BackgroundStack from "../components/BackgroundStack";
import {
    Box,
    Center,
    Container,
    List,
    ListItem,
    Text,
    UnorderedList,
    VStack,
} from "@chakra-ui/react";

export default function Treatment() {
    return (
        <BackgroundStack>
            <Container
                bg="blackAlpha.600"
                rounded="md"
                overflow="hidden"
                p="5"
                minH="85vh"
            >
                <VStack>
                    <Text fontSize="4xl" fontWeight="bold" color="white">
                        The Treatment
                    </Text>
                    <UnorderedList spacing="3" fontSize="2xl" color="white">
                        <ListItem>Stay In Upstairs Nursery</ListItem>
                        <ListItem>Writing Is Forbidden</ListItem>
                        <ListItem>Cannot See Newborn Child</ListItem>
                        <ListItem>Forced Sedentary Lifestyle</ListItem>
                        <ListItem>Despise The Nursery&apos; Wallpaper</ListItem>
                        <ListItem>Not Allowed To See Visiting Family</ListItem>
                        <ListItem>Definitely Won&apos;t See Figures</ListItem>
                        <ListItem>Locked Into Upstairs Nursery Room</ListItem>
                        <ListItem>Become The Woman In The Wallpaper</ListItem>
                    </UnorderedList>
                </VStack>
            </Container>
        </BackgroundStack>
    );
}
