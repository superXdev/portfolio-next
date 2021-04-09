import Layout from 'components/layout'
import { useEffect, useState, useCallback, memo } from 'react'
import { useRouter } from 'next/router'

function Projects() {
    const [projects, setProjects] = useState([])
    const route = useRouter()
    const currentPath = route.asPath

    useEffect(() => {
        async function fetchProjects() {
            const myProjects = await (await fetch('/api/projects')).json()
            setProjects(myProjects)
        }
        fetchProjects()
    }, [])

    const showDetailProject = card => {
        if (card) {
            let projectId = null;
            card.nativeEvent.path.some(elements => {
                if (elements.classList?.contains('card-project')) {
                    projectId = elements.dataset.projectid;
                }
            })
            route.push(`${currentPath}/${projectId}`)
        }
    }

    const memoizedShowDetailProject = useCallback(showDetailProject, [])

    return (
        <Layout title='Projects'>
            <div className='flex justify-between items-end mb-4'>
                <div>
                    <h1 className='text-3xl'>Projects</h1>
                    <span className='block  text-sm'>Click project to see project detail</span>
                </div>
                <div>
                    <a className='cursor-pointer' href='https://github.com/devnazir?tab=repositories' target='blank'>More projects...</a>
                </div>
            </div>
            <div className='grid md:grid-cols-project gap-6 gap-y-10'>
                <Card  projects={projects} handleOnlickProjectDetail={memoizedShowDetailProject}/>
            </div>
        </Layout>
    )
}

const Card = memo(CardProject)

function CardProject({ projects, handleOnlickProjectDetail }) {
    return (
        projects.map(project => {
            return (
                <div key={project.id} className='card-project rounded overflow-hidden relative' onClick={handleOnlickProjectDetail} data-projectid={project.id}>
                    <div className='w-full'>
                        <img src={`${project.linkImage}`} alt={project.name} lazy="true"/>
                    </div>

                    <div className='w-full bg-purple-400 p-2 text-white'>
                        <span className='text-xl block cursor-pointer'>{project.name}</span>
                        <div className='flex absolute right-0 top-0 bg-green-500 rounded p-2'>
                            {
                                project.stack.map((stack, id) => {
                                    return <img key={id} src={`${stack}`} className='w-5 h-5 bg-cover mr-1' />
                                })
                            }
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default Projects