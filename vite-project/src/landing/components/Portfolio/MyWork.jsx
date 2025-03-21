
import { useState } from "react";
import './MyWork.css';

export default function MyWork() {
    let projects = [
        {
            name: "Bootstrap Project 🇵🇱",
            date: "2024-12-28",
            language: "JavaScript",
            link: "https://trn64x.github.io/boots/boots.html"
        },
        {
            name: "Christmas tree 🇵🇱",
            date: "2024-02-14",
            language: "HTML, CSS",
            link: "https://trn64x.github.io/choinka/"
        },
        {
            name: "To Do App 🇬🇧",
            date: "2024-06-10",
            language: "React",
            link: "https://trn64x.github.io/to-do-List/todo.html"
        },        {
            name: "BlackJack 🇬🇧",
            date: "2024-06-20",
            language: "Python",
            link: "https://github.com/trn64x/cardGame"
        }
    ];
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("Newest");
    // Filtering projects based on search
    let filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(search.toLowerCase())
    );
    
    // Sorting projects by date
    filteredProjects.sort((a, b) => {
        return sortOrder === "Newest"
            ? b.date.localeCompare(a.date)
            : a.date.localeCompare(b.date);
    });
    return (
        <div id="Portfolio">
            <div className="buttons">
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => {setSearch(e.target.value)}}
                />
                <select onChange={(e) => {setSortOrder(e.target.value)}}>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>
            </div>

            <div className="flex">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="item">
                        <div className="l">
                        <p>✏️ Project: {project.name}</p>
                        <p id="a2">📅 Date: {project.date}</p>
                        <p id="a3">📙 language:{project.language}</p>
                        </div>
                        <div className="r"><button> <a href= {project.link}>Project Link</a></button></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
