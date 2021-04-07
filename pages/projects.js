import Layout from 'components/layout'
import { useEffect, useState } from 'react'
import Link from 'next/link'

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        async function fetchProjects() {
            const myProjects = await (await fetch('/api/projects')).json()
            setProjects(myProjects)
        }

        fetchProjects()
    }, [])

    if (projects.length === 0) {
        return (
            <Layout title='Projects'>
                <div className='fixed inset-0 flex w-full h-screen items-center justify-center'>Loading</div>
            </Layout>
        )
    }

    return (
        <Layout title='Projects'>
            <h1 className='text-3xl'>Projects</h1>
            <span className='block mb-4 text-sm'>Click project title to see project detail</span>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
                {
                    projects.map(project => {
                        return (
                            <div key={project.id} className='bg-red-100'>
                                <div className='w-full bg-black h-40 sm:h-32 md:h-36 lg:h-44 mb-4'>

                                </div>

                                <Link href={`/projects/${project.id}`}>
                                    <a className='text-md'>{project.name}</a>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default Projects