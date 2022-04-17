import Head from "next/head";
import React from "react";
import Hero from "../components/hero";

export default function Home() {
    return (
        <div>
            <Head>
                <title>The Yellow Wallpaper</title>
                <meta
                    name="description"
                    content="A visual representation of The Yellow Wallpaper"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
        </div>
    );

    //         <footer className={styles.footer}>
    //             <a
    //                 href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //             >
    //                 Powered by{" "}
    //                 <span className={styles.logo}>
    //                     <Image
    //                         src="/vercel.svg"
    //                         alt="Vercel Logo"
    //                         width={72}
    //                         height={16}
    //                     />
    //                 </span>
    //             </a>
    //         </footer>
    //     </div>
    // );
}
