import "./style.css";
import gitHubIcon from "./email.svg"

const BtnGitHub = ({link}) => {
    return ( 
        <a href={link} target="_blank" rel="noreferrer" class="btn-outline">
                    <img src={gitHubIcon} alt=""/>
                    Email
                </a>
     );
}
 
export default BtnGitHub;