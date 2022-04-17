import Link from "next/link";
import { useTearContext } from "../context/tear";

export default function TearButton() {
    const context = useTearContext();

    return (
        <Link href="/characters">
            <a>
                <button
                    className="text-2xl font-semibold px-8 py-2 bg-yellow-300 text-black rounded shadow-md shadow-yellow-600 hover:bg-yellow-200 active:bg-yellow-500 mt-8"
                    onClick={() => context.setTorn(true)}
                >
                    <p className="text-xl">Tear The Wallpaper</p>
                </button>
            </a>
        </Link>
    );
}
