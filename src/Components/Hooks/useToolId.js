import { useEffect, useState } from "react";

const useToolId = Id => {
    const [toolId, setToolId] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/tools/${Id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setToolId(data));
    }, [Id]);
    return [toolId, setToolId]
}
export default useToolId;