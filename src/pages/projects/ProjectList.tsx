import Pill from "../../elements/Pill";
import { Link } from "react-router-dom";
import Header from "../../elements/Header";
import Wrapper from "../../elements/Wrapper";
import projects from '../../../config/projects';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function getRandomColor (): string {
    const colors = ['green', 'blue', 'purple'];

    const color = colors[Math.floor(Math.random() * colors.length)];

    return `text-${color}-800 bg-${color}-100`;
}

const ProjectList = () => (
    <Wrapper>
        <Header title={'Software Projects'} items={['Projects']} />
        <div className={'grid lg:grid-cols-3 gap-4 lg:gap-12 mt-10'}>
            {projects.map(project => (
                <Link to={`/projects/${project.title.toLocaleLowerCase()}`}>
                    <div className={'relative w-full h-full'}>
                    <div className={'bg-gray-950/50 transition duration-300 hover:bg-black/50 p-8 rounded-lg'}>
                        {project.favourite && <FontAwesomeIcon icon={faStar} className={'absolute top-4 right-4 text-yellow-500'} />}
                            <div className={'flex justify-center'}>
                                <img src={project.icon} className={'w-32 h-32 lg:w-64 lg:h-64 rounded-full p-4'} />
                            </div>
                            <div className={'text-center'}>
                                <h2 className={'text-xl lg:text-3xl font-semibold'}>
                                    {project.title}
                                </h2>
                                <p className={'text-sm md:text-base text-gray-400 mt-1'}>
                                    {project.hero}
                                </p>
                                <div className={'mt-2'}>
                                    {project.tags?.map(tag => (
                                        <Pill color={getRandomColor()}>{tag}</Pill>
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </Wrapper>
);

export default ProjectList;
