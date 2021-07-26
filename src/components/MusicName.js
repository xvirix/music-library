import Music from './Music';
import Fade from 'react-reveal/Fade';
import data from '../data';

class MusicName extends Component {
    state = {  }
    render() { 
        return (<div>
        <h1 className='heading'>
        <Fade bottom cascade>Work.</Fade></h1>
        <div className='Music-Name'>
                {data.projects.map((project)=>(
                    <Music key={project.id}
                             title = {project.title}
                             service = {project.service}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                     ></Music>
                ))}
        </div>
        </div>  );
    }
}
 
export default MusicName;