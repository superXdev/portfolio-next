import { useRouter } from 'next/router'
import Layout from 'components/layout'
import { useEffect, useState } from 'react'

 function Project() {
    const { query } = useRouter()
    const [projects, setProjects] = useState([])

    useEffect(() => {
        async function fetchProjectById() {
            const projectById = await (await fetch(`../api/projects/${query.id}`)).json()
            setProjects(projectById)
        }

        fetchProjectById()
    }, [query.id])

    return (
        <Layout title={projects[0]?.name}>
            <h1>{projects[0]?.name}</h1>
        </Layout>
    )
}

export default Project