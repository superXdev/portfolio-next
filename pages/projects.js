import Layout from 'components/layout'
import { useEffect, useState, memo } from 'react'
import ActiveLink from 'components/nav/activeLink'

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        async function fetchProjects() {
            try {
                const myProjects = await (await fetch('/api/projects', { signal: signal })).json()
                setProjects(myProjects)
            } catch(error) {
                console.log(error)
            }
        }
        fetchProjects()

        return () => {
            abortController.abort()
        }
    }, [])

    return (
        <Layout title='Projects'>
            <div className='flex justify-between items-end mb-4'>
                <div>
                    <h1 className='text-3xl'>Projects</h1>
                    <span className='block text-sm'>Click project to see project detail</span>
                </div>
                <button className='cursor-pointer'>
                    <a className='' href='https://github.com/devnazir?tab=repositories' target='blank'>More projects...</a>
                </button>
            </div>

            <div className='grid md:grid-cols-project gap-6 gap-y-10'>
                <Card projects={projects} />
            </div>
        </Layout>
    )
}

const Card = memo(CardProject)

function CardProject({ projects }) {
    return (
        projects.map(project => {
            return (
                <ActiveLink href={`/projects/${project.id}`} key={project.id}>
                    <div className='card-project rounded overflow-hidden relative bg-black'>
                        <div className='w-full'>
                            <img src={`${project.linkImage}`} alt={project.name} lazy="true" />
                        </div>

                        <div className='w-full bg-purple-400 p-2 text-white'>
                            <h2 className='text-xl block cursor-pointer'>{project.name}</h2>
                            <div className='flex absolute right-0 top-0 bg-green-500 rounded p-2'>
                                {
                                    project.stack.map((stack, id) => {
                                        return <img key={id} src={`${stack}`} className='w-5 h-5 bg-cover mr-1' />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </ActiveLink>
            )
        })
    )
}

export default Projects