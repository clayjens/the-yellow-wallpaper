import React from "react";
import Head from "next/head";
import { useTearContext } from "../context/tear";
import Image from "next/image";
import BG from "../components/bg";

export default function Characters() {
    const context = useTearContext();

    return (
        <div>
            <Head>
                <title>TYW | Characters</title>
                <meta
                    name="description"
                    content="A visual representation of The Yellow Wallpaper"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BG>
                <div className="flex items-center justify-between container mx-auto">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/shadows/male.png"
                            alt="male silhouette"
                            width={256}
                            height={256}
                        />
                        <div className="bg-black text-white bg-opacity-50 rounded">
                            <h1 className="text-center py-4 text-2xl">
                                John, The Husband
                            </h1>
                            <div className="p-4">
                                <ul className="max-w-md">
                                    <li>
                                        Physician attempting to make his wife
                                        better
                                    </li>
                                    <li>
                                        Disregards his Wife&apos;s true feelings
                                    </li>
                                    <li>The authority figure</li>
                                    <li>
                                        Doesn&apos;t recognize his Wife&apos;s
                                        internal struggle, only that she is
                                        physically unwell
                                    </li>
                                    <li>
                                        Faints when his Wife begins to see
                                        herself as the woman in The Yellow
                                        Wallpaper
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/shadows/female.png"
                            alt="female silhouette"
                            width={225}
                            height={225}
                        />
                        <div className="bg-black text-white mt-4 bg-opacity-50 rounded">
                            <h1 className="text-center py-4 text-2xl">
                                Narrator, The Wife
                            </h1>
                            <div className="p-4">
                                <ul className="min-w-lg">
                                    <li>
                                        Mentally ill and in an unfortunate
                                        condition
                                    </li>
                                    <li>
                                        Unable to see her child because of her
                                        mental health
                                    </li>
                                    <li>Disturbed by The Yellow Wallpaper</li>
                                    <li>
                                        Controlled by John but still loves him
                                    </li>
                                    <li>
                                        Becomes fascinated by The Yellow
                                        Wallpaper
                                    </li>
                                    <li>
                                        Begins to believe that she is stuck in
                                        The Yellow Wallpaper
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </BG>
        </div>
    );
}
