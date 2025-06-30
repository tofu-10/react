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

    return (
        <>
            <input type="text" />
            <br />
            <input
                type="checkbox"
                checked={hideCompleted}
                onChange={handleHideChange}
            />
            <span>Hide Completed</span>
            <ul>
                {object
                    .filter((item) => !hideCompleted || !item.complete)
                    .map((item) => (
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