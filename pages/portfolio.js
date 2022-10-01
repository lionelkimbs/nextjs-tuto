import Link from 'next/link';
import React from 'react';
import Meta from '../components/Meta';
import { projects } from '../pages/api/projects/projectsData'

const portfolio = () => {
    return (
        <div>
            <Meta
                title={'Protofolio dev, les tous derniers projets réalisés'}
                description={'Sed quos facere aut totam labore et perspiciatis dolorem et voluptatem voluptatem.'}
            />
            <h2>Portfolio</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link href="projects/[id]" as={`/projects/${project.id}`}>
                            <a>
                                {project.title} <span>➡️</span>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default portfolio;