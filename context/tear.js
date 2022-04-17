import { createContext, useContext, useState } from "react";

const TearContext = createContext();

export function TearWrapper({ children }) {
    const [torn, setTorn] = useState(false);

    return (
        <TearContext.Provider
            value={{
                torn,
                setTorn,
            }}
        >
            {children}
        </TearContext.Provider>
    );
}

export function useTearContext() {
    return useContext(TearContext);
}
