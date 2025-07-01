import { useState } from "react";


export function Basic() {
    const object = [
        { id: 1, text: "Learn React", complete: false },
        { id: 2, text: "Write blog post", complete: true },
        { id: 3, text: "Read Clean Code", complete: false },
        { id: 4, text: "Walk the dog", complete: false },
    ];
    
    const [hideCompleted, setHideCompleted] = useState(false);

    function handleHideChange(e) {
        setHideCompleted(e.target.checked);
    }

    const [search, setSearch] = useState("");

    return (
        <>
            <input
                type="text"
                placeholder="Search todos"
            value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <br />
            <input
                type="checkbox"
                checked={hideCompleted}
                onChange={handleHideChange}
            />
            <span>Hide Completed</span>
            <ul>
                {object
                    .filter(item =>
                        (!hideCompleted || !item.complete) &&
                        item.text.toLowerCase().includes(search.toLowerCase())
                    )
                    .map(item => (
                        <li key={item.id}>
                            <span>
                                {item.text}
                                {item.complete ? "✅" : ""}
                            </span>
                        </li>
                    ))}
            </ul>
        </>
    );
}