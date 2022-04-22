import { Box, HStack, Heading, Text, Center, VStack } from "@chakra-ui/react";
import React from "react";

export default function HeroCard() {
    return (
        <Box
            p={5}
            shadow="md"
            background="blackAlpha.600"
            color="white"
            rounded="md"
        >
            <VStack>
                <HStack>
                    <Center>
                        <Heading fontSize="3xl">The Yellow Wallpaper</Heading>
                    </Center>
                </HStack>
                <Center>
                    <Text mt="4" fontSize="lg">
                        Charlotte Perkins Gilman, 1892
                    </Text>
                </Center>
            </VStack>
        </Box>
    );
}
