import { useEffect, useState } from "react";

const useFetch = (url: string) => {
    const [data, setData] = useState("");

    useEffect(() => {
        async function getCep() {
            const resposta = await fetch(url);
            const dataJson = await resposta.json();
            setData(dataJson);
        }

        if (url != null) {
            getCep();
        }

    }, [url]);

    return [data];
}

export { useFetch }
