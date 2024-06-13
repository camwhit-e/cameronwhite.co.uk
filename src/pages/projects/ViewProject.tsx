import { useParams } from "react-router-dom";
import Wrapper from "../../elements/Wrapper";
import projects from '../../../config/projects';
import { useEffect, useState } from "react";
import { Project } from "../../../config/projects";
import NotFound from "../NotFound";
import Header from "../../elements/Header";
import { Markup } from 'interweave';
import { DotLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface Stats {
    stars?: number;
    forks?: number;
    language?: string;
    releases?: number;
}

interface Stat {
    name: string;
    count?: string | number;
}

const StatBox = ({ count, name }: Stat) => (
    <div className={'bg-zinc-950/50 rounded-xl'}>
        <div className={'flex flex-col items-center justify-center h-full'}>
            <p className={'text-3xl lg:text-8xl font-bold text-blue-400'}>
                {count ?? <DotLoader color={'#60a5fa'} />}
            </p>
            <p className={'lg:text-lg text-gray-400 mt-2'}>
                {name}
            </p>
        </div>
    </div>
);

export default function ViewProject () {
    const params = useParams<'id'>();
    const [stats, setStats] = useState<Stats>();
    const [project, setProject] = useState<Project>();
    const [fetchError, setFetchError] = useState<boolean>(false);

    const updateStats = (newData: Partial<Stats>) => {
        setStats(prevStats => ({
            ...prevStats,
            ...newData
        }));
    };

    useEffect(() => {
        const result = projects.find(x => x.title.toLowerCase() === params.id);

        setProject(result);
    }, [params]);

    useEffect(() => {
        if (project?.repository || !stats) {
            fetch();
        }

        async function fetch () {
            window.fetch(`https://api.github.com/repos/${project!.repository}`)
                .then(response => response.ok ? response.json() : setFetchError(true))
                .then(data => {
                    updateStats({
                        stars: data.stargazers_count,
                        language: data.language,
                        forks: data.forks,
                    })
                })  
            
            window.fetch(`https://api.github.com/repos/${project!.repository}/releases`)
                .then(response => response.ok ? response.json() : setFetchError(true))
                .then(data => updateStats({ releases: data.length }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [project]);

    if (!project) return <NotFound />;

    return (
        <Wrapper>
            <Header title={project.title} items={['Projects', project.title]}/>
            <div className={'text-gray-400 text-lg w-full'}>
                <div className={'inline-flex'}>
                    <Link to={'/projects'}>
                        <FontAwesomeIcon
                            size={'xl'}
                            icon={faArrowCircleLeft}
                            className={'mx-4 mt-[0.65rem] text-blue-400'}
                        />
                    </Link>
                    <h3 className={'text-2xl lg:text-4xl font-semibold text-white'}>
                        Project Summary
                    </h3>
                </div>
                <div className={classNames('grid lg:gap-8', !fetchError && 'lg:grid-cols-2')}>
                    <Markup content={project.summary} />
                    {!fetchError && (
                        <div className={'grid grid-cols-2 grid-rows-2 gap-4'}>
                            <StatBox name={'GitHub Stars'} count={stats?.stars} />
                            <StatBox name={'Main Language'} count={stats?.language} />
                            <StatBox name={'Releases'} count={stats?.releases} />
                            <StatBox name={'Total Forks'} count={stats?.forks} />
                        </div>
                    )}
                </div>
                <div className={'my-10 h-1 bg-black rounded-full'} />
                <div className={'grid lg:grid-cols-2 lg:gap-12'}>
                    {project.sections.map((section, index) => (
                        <>
                            {index % 2 === 0 && (
                                <div className={'bg-gray-950/50 rounded-xl'}>
                                    <div className={'p-4 w-full rounded-xl shadow-xl'}>
                                        <a href={section.imageUrl}>
                                            <img src={section.imageUrl} />
                                        </a>
                                    </div>
                                </div>
                            )}
                            <div>
                                <h3 className={'text-2xl lg:text-4xl text-white font-semibold'}>
                                    {section.title}
                                </h3>
                                <Markup content={section.content} />
                            </div>
                            {index % 2 !== 0 && (
                                <div className={'bg-gray-950/50 rounded-xl'}>
                                    <div className={'p-4 w-full rounded-xl shadow-xl'}>
                                        <a href={section.imageUrl}>
                                            <img src={section.imageUrl} />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}