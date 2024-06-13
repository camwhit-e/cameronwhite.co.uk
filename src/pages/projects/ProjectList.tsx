import { Link } from "react-router-dom";
import Header from "../../elements/Header";
import Wrapper from "../../elements/Wrapper";
import projects from '../../../config/projects';

export default function ProjectList () {
    return (
        <Wrapper>
            <Header title={'Software Projects'} items={['Projects']} />
            <div className={'grid lg:grid-cols-3 lg:gap-12'}>
                {projects.map(project => (
                    <Link to={`/projects/${project.title.toLocaleLowerCase()}`}>
                        <div className={'bg-gray-950/50 h-full p-8 rounded-lg'}>
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
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Wrapper>
    );
}
