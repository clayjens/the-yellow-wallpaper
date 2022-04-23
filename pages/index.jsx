import React from "react";
import Hero from "../components/Hero";
import Document from "../components/Document";
import { Container } from "@chakra-ui/react";

export default function Home() {
    return (
        <Document>
            <Hero />
        </Document>
    );
}
