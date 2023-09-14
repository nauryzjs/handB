import {useParams} from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "./../helpers/projectsList";
// import img from "./../img/projects/02-big.jpg";




const Project = () => {
    const {id} = useParams();
    const project = projects[id];
    console.log(project)
    return ( 
        <main class="sectionProject">
        <div class="container">
            <div class="project-details">

                <h1 class="title-1">{project.title}</h1>

                <img src={project.imgBig} alt={project.title}
                class="project-details__cover"/>

                <div class="project-details__desc">
                    <p>{project.skills}</p>
                </div>

                {project.gitHubLink && (
                    <BtnGitHub link="mailto:"/>
                )}

                

            </div>
        </div>
    </main>
    );
}
 
export default Project;