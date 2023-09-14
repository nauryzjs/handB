import React from "react"; // Добавьте импорт React
import Project from "../components/project/Project";
import { projects } from "./../helpers/projectsList";

const Projects = () => {
    return (
        <main className="sectionProjects">
            <div className="container">
                <h2 className="title-1">Руководство Университета</h2>
                <ul className="projects">
                    {projects.map((project, index) => (
                        <Project 
                        key={index} 
                        title={project.title} 
                        img={project.img}
                        index={index} 
                        />
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default Projects;
