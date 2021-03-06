import { useEffect, useState } from "react"


const useTool = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);
    return [tools, setTools]
}
export default useTool;