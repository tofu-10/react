import React, { useEffect, useState } from "react";
import axios from "axios";

export const Comment = () => {
    const [emails, setEmails] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchEmail = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/comments"
                );
                setEmails(response.data.slice(0, 10));
                console.log(response.data);
            } catch (error) {
                setError("Error fetching Email........");
                console.error("error fetching Email:", error);
            }
        };
        fetchEmail(); // call the async function
    }, []);

    return (
        <div>
            <h1>Comment Component</h1>
                    {error && <p style={{ color: "red" }}>{error}</p>}

            <ul>
                {emails.map((emm) => (
                    <p key={emm.id}>{emm.email}</p>
                ))}
            </ul>
        </div>
    );
};
