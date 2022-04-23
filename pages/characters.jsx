import React from "react";
import BackgroundStack from "../components/BackgroundStack";
import {
    Spacer,
    Container,
    VStack,
    HStack,
    Text,
    Image,
    Box,
    Heading,
    Center,
    Badge,
    Flex,
    Button,
    Stack,
} from "@chakra-ui/react";

export default function Characters() {
    const CharacterCard = ({ img, alt, title, description, role }) => {
        return (
            <Box
                w="600px"
                rounded="md"
                overflow="hidden"
                bg="blackAlpha.600"
                p="5"
            >
                <Center mt="8">
                    <Badge
                        variant="solid"
                        colorScheme="black"
                        rounded="full"
                        fontSize="md"
                    >
                        {role}
                    </Badge>
                </Center>
                <Center py="8">
                    <Image src={img} alt={alt} boxSize="300"></Image>
                </Center>
                <Box px="5">
                    <Stack>
                        <Center>
                            <Text
                                fontSize="3xl"
                                fontWeight="bold"
                                my={1}
                                color="white"
                            >
                                {title}
                            </Text>
                        </Center>
                        <Text
                            fontSize="2xl"
                            fontWeight="normal"
                            my={2}
                            color="white"
                        >
                            {description}
                        </Text>
                    </Stack>
                </Box>
            </Box>
        );
    };

    return (
        <BackgroundStack>
            <Flex justifyContent={"center"}>
                <Spacer />
                <CharacterCard
                    img="/shadows/female.png"
                    title="Narrator"
                    role="The Wife"
                    description={
                        "Misunderstood and poorly treated in the hopes of being treated properly, the unnamed Narrator is an individual who faces poor conditions placed on her by her husband, John."
                    }
                />
                <Spacer />
                <CharacterCard
                    img="/shadows/male.png"
                    title="John"
                    role="The Husband"
                    description={
                        "As a physician and loving husband, John wishes the best for his wife. However, his own expectations are unfairly placed onto the Narrator. These expectations are physically represented by the deteriorating room and poor treatment of the Narrator."
                    }
                />
                <Spacer />
            </Flex>
        </BackgroundStack>
    );
}
