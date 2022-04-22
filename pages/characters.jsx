import React from "react";
import BackgroundStack from "../components/BackgroundStack";
import {
    VStack,
    HStack,
    Text,
    Image,
    Box,
    Heading,
    Center,
    Badge,
} from "@chakra-ui/react";

export default function Characters() {
    const CharacterCard = ({ img, alt, title, role }) => {
        return (
            <Box
                p="5"
                shadow="lg"
                background="blackAlpha.600"
                rounded="md"
                color="white"
                mt="5"
            >
                <Center>
                    <Image alt={alt} src={img} boxSize={256} />
                </Center>
                <VStack>
                    <Heading as="u">{title}</Heading>
                    <Text maxWidth="540" fontSize="lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Necessitatibus molestias error eius ex debitis at
                        odit earum saepe vero ullam accusantium in, dolore,
                        natus praesentium quisquam culpa reiciendis odio
                        impedit!
                    </Text>
                </VStack>
                <HStack>
                    <Badge
                        backgroundColor="black"
                        color="white"
                        mt="2"
                        px="3"
                        py="1"
                        rounded="full"
                    >
                        {role}
                    </Badge>
                </HStack>
            </Box>
        );
    };

    return (
        <BackgroundStack>
            <VStack>
                <HStack>
                    <CharacterCard
                        img="/shadows/female.png"
                        title="Narrator"
                        role="The Wife"
                    />
                </HStack>
                <HStack>
                    <CharacterCard
                        img="/shadows/male.png"
                        title="John"
                        role="The Husband"
                    />
                </HStack>
            </VStack>
        </BackgroundStack>
    );
}
