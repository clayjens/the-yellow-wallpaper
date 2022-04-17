import { useTearContext } from "../context/tear";

export default function BG({ children }) {
    const context = useTearContext();

    return (
        <>
            <div
                className={`bg-cover min-h-screen ${
                    context.torn ? "bg-wallpaper_torn" : "bg-wallpaper"
                }`}
            >
                <div className="container mx-auto">{children}</div>
            </div>
        </>
    );
}
