import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [ques, setQues] = useState([]);
    useEffect(() => {
        fetch("Ques.json")
            .then(res => res.json())
            .then(data => setQues(data))
    }, [])
    return (
        <div>
            <div class="card w-full bg-base-100 my-5" style={{ backgroundImage: `url(https://i.postimg.cc/J4bN8r0h/tools.jpg)` }}>
                {
                    ques.map((q) => <div class="card-body bg-base-200 my-5 shadow-xl mx-10 rounded-xl ">
                        <h2 class="card-title"><b>Question:</b> {q.question}</h2>
                        <p><b>Answer:</b> {q.answer}</p>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Blog;