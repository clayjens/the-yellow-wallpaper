import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
    return (
        <Box as="footer" bg="blackAlpha.700" py="2">
            <footer>
                <Center>
                    <Text fontSize="lg" color="white">
                        Clayton Jensen
                    </Text>
                </Center>
            </footer>
        </Box>
    );
}

export default Footer;
