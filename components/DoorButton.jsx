import React from "react";
import { Tooltip, Box, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function DoorButton() {
    const [doorImage, setDoorImage] = React.useState("/door.png");
    const Router = useRouter();

    const handleDoorknob = () => {
        setDoorImage("/door_open.png");

        // Wait for 2.1 seconds and then go to the /characters page
        setTimeout(() => {
            Router.push("/characters");
        }, 2100);
    };

    return (
        <Tooltip label="Use the doorknob to begin." aria-label="Door Tooltip">
            <Box position="relative">
                <Image src={doorImage} alt="" width={512} height={"auto"} />
                <Button
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform={
                        doorImage === "/door.png"
                            ? "translate(240%, -40%)"
                            : "translate(140%, -40%)"
                    }
                    bg="gold"
                    rounded="full"
                    shadow="lg"
                    size="sm"
                    _hover={"none"}
                    onClick={handleDoorknob}
                ></Button>
            </Box>
        </Tooltip>
    );
}
