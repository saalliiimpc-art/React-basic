import { useState, useEffect } from "react";


export default function NoteApp() {
    let [title, setTitle] = useState("");
    let [content, setContent] = useState("");
    let [color, setColor] = useState("white");

    let [error, setError] = useState("");
    let [result, setResult] = useState(
        JSON.parse(localStorage.getItem("result")) || []
    );

    useEffect(() => {
        localStorage.setItem("result", JSON.stringify(result));
    }, [result]);

    function createNote(e) {
        e.preventDefault();

        if (title === "") {
            setError("Please enter the title");
            return;
        } else if (content === "") {
            setError("Please enter the content");
            return;
        }

        setError("");

        setResult([...result, { title: title, content: content, color: color }]);

        setTitle("");
        setContent("");
        setColor("white");
    }


    function deleteNote(index) {
       let  newNotes= [...result]
        newNotes.splice(index,1)
        setResult(newNotes)
    }

    
    return (
        <>
            <div className="nav">
                <h1>Note App</h1>

                <div className="navChild">
                    <input type="search" placeholder="search notes" id="search" />
                    <button>⌕</button>
                </div>

                <hr />
            </div>

            <div id="parentCont">
                <div className="sideDiv">
                    <ul className="ul">
                        <li
                            id="search"
                            className="search"
                            onClick={() => document.getElementById("search").focus()}
                        >
                            ⌕ Search Notes
                        </li>

                        <li
                            className="new"
                            onClick={() => document.getElementById("title").focus()}
                        >
                            ＋ New Notes
                        </li>

                        <li className="archive">▣ Archive</li>

                        <li className="delete">🗑 Deleted Notes</li>
                    </ul>
                </div>

                <div id="childCont">
                    <h2>Create Your Notes</h2>

                    <form id="form" onSubmit={createNote}>
                        <input
                            id="title"
                            type="text"
                            placeholder="🖉 Title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <br />

                        <textarea
                            name="content"
                            id="content"
                            placeholder="▤ Write your note here..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>

                        <br />

                        <p style={{ color: "red" }}>{error}</p>

                        <select
                            id="option"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        >
                            <option value="#FFFF">Default</option>
                            <option value="#F9A8D4">Red</option>
                            <option value="#BFDBFE">Blue</option>
                            <option value="#BBF7D0">Green</option>
                            <option value="#DDD6FE">Violet</option>
                        </select>

                        <button id="noteBtn" type="submit">Create Note</button>
                    </form>
                    <br />
                    <button id="clear" onClick={() => setResult([])}>Clear All</button>
                    <br /><br />

                    <div id="notes">
                        {result.map((note, index) => (
                            <div key={index} style={{ background: note.color }} id="note">
                                <h4>{note.title}</h4>
                                <p>{note.content}</p>

                                <br /><br />
                                <div id="edbtn">
                                    <button onClick={() => document.getElementById("title").focus()}>Edit</button>
                                    <button style={{ margin: 10 }} onClick={() => deleteNote(index)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}