import React from "react";
import {
    Center,
    Text,
    Box,
    Container,
    Grid,
    Image,
    VStack,
    Divider,
    Badge,
    GridItem,
    HStack,
    SimpleGrid,
    IconButton,
    Tooltip,
} from "@chakra-ui/react";
import Document from "../components/Document";
import assets from "../assets";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function Characters() {
    const CharacterData = [
        {
            image: assets.shadows.female,
            alt: "",
            name: "Narrator",
            description:
                "The unnamed narrator can be seen as an extension of Gilman, especially when considering the events of The Yellow Wallpaper to Gilman's own. Loved by her husband, John, the Narrator is unable to express that she is unwell due to John's treatment of her. Solitary and sedentary, the Narrator's mental issues become more prevalent until the climax of The Yellow Wallpaper in which her mental state has fully deteriorated. Disallowed to see her child, the Narrator has no sense of motherhood.",
            roles: ["The Wife"],
        },
        {
            image: assets.shadows.male,
            alt: "",
            name: "John",
            description:
                "A physician, much like the Narrator's brother, who believes that his specially-conceived treatment of his wife is helping her. Perhaps ignorant to the true effects of the treatment, John believes that what he's doing is best and must be done in order to help his wife recover. John's sister, Jennie, is the caregiver of the household and also believes in John's treatment. However, Jennie removes the feminine nature of the Narrator.",
            roles: ["The Husband", "Physician"],
        },
    ];

    const [cardIndex, setCardIndex] = React.useState(0);
    const [cardData, setCardData] = React.useState(CharacterData[cardIndex]);

    // FIXME: What is even going on with this warning?
    React.useEffect(() => {
        setCardData(CharacterData[cardIndex]);
    }, [cardIndex, setCardIndex]);

    const CharacterCard = ({ image, alt, name, roles, description }) => (
        <GridItem bg="blackAlpha.700" rounded="lg" py="10" px="5">
            <VStack color="white">
                <HStack>
                    {roles &&
                        roles.map((role, i) => (
                            <Badge key={i} variant="solid" colorScheme="yellow">
                                {role}
                            </Badge>
                        ))}
                </HStack>
                <Image src={image} alt={alt} boxSize="256" />
                <Text fontSize="3xl" fontWeight="bold">
                    {name}
                </Text>
                <Divider />
                <Text fontSize="lg">{description}</Text>
            </VStack>
        </GridItem>
    );

    const ArrowButton = ({ onClick, label, icon }) => (
        <Box p="2" bg="blackAlpha.700" rounded="lg">
            <Tooltip label={label}>
                <IconButton
                    onClick={onClick}
                    variant="solid"
                    colorScheme="yellow"
                    icon={icon}
                />
            </Tooltip>
        </Box>
    );

    return (
        <Document>
            <Container maxW="container.xl" pt="8">
                <HStack>
                    <ArrowButton
                        label="Previous Character"
                        icon={<FiArrowLeft size="30" />}
                        onClick={() => {
                            if (cardIndex != 0) setCardIndex(cardIndex - 1);
                        }}
                    />
                    <CharacterCard
                        image={cardData.image}
                        alt={cardData.alt}
                        name={cardData.name}
                        roles={cardData.roles}
                        description={cardData.description}
                    />
                    <ArrowButton
                        label="Next Character"
                        icon={<FiArrowRight size="30" />}
                        onClick={() => {
                            if (cardIndex != CharacterData.length - 1)
                                setCardIndex(cardIndex + 1);
                        }}
                    />
                </HStack>
            </Container>
        </Document>
    );
}

export default Characters;
