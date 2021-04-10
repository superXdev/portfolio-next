import { useRouter } from 'next/router'
import Layout from 'components/layout'
import { useEffect, useState } from 'react'
import Link from 'next/link'

function Project() {
    const { query } = useRouter()
    const [projects, setProjects] = useState([])
    const [button, setButton] = useState(false)

    useEffect(() => {
        async function fetchProjectById() {
            const projectById = await (await fetch(`../api/projects/${query.id}`)).json()
            setProjects(projectById)
        }

        fetchProjectById()
    }, [query.id])

    const showButton = () => {
        setButton(true)
    }

    const hiddenButton = () => {
        setButton(false)
    }

    return (
        <Layout title={projects[0]?.name}>
            <h1 className='text-2xl'>{projects[0]?.name}</h1>
            <div className='relative'>
                <img className='bg-cover mt-4 cursor-pointer' src={projects[0]?.linkImage} alt={projects[0]?.name} onClick={showButton} />
                <div className={`flex text-white transition duration-500 text-sm items-center justify-center absolute inset-0 ${button ? 'z-1 bg-black bg-opacity-50' : '-z-1'}`} onClick={hiddenButton}>
                    <button className='bg-blue-500 p-2 rounded hover:bg-blue-700'><a className='' href='#'>Source Code</a></button>
                    <button className='bg-green-500 p-2 ml-3 rounded hover:bg-green-700'><a className='' href='#'>Visit Website</a></button>
                    <button className='bg-yellow-500 p-2 ml-3 rounded hover:bg-yellow-700'><a className='' href='#'>Show demo here</a></button>
                </div>
            </div>

            <div className='mt-4'>
                <h3 className='text-xl mb-1 '>Description</h3>
                <p className='text-sm md:text-md leading-5 mb-4'>{projects[0]?.description}</p>
                <Link href="/projects">
                    <a className='mt-8 bg-red-500 text-white text-sm p-2 rounded hover:bg-red-700'>Back</a>
                </Link>
            </div>
        </Layout>
    )
}

export default Project