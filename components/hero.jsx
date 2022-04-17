import { useState } from "react";
import { useTearContext } from "../context/tear";
import BG from "./bg";

import TearButton from "./tearbtn";

export default function Hero() {
    const context = useTearContext();

    return (
        <BG>
            <div className="flex flex-col items-center text-center h-screen ">
                <div className="m-auto bg-black text-white bg-opacity-50 p-4 rounded">
                    <div>
                        <h1 className="text-6xl font-semibold underline">
                            The Yellow Wallpaper
                        </h1>
                        <p className="text-2xl py-2 font-light">
                            Charlotte Perkins Gilman, 1892
                        </p>
                    </div>
                </div>
                <div className="mb-20">{!context.torn && <TearButton />}</div>
            </div>
        </BG>
    );
}
