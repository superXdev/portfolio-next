import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function ActiveLink({ children, href, cv = false, target }) {
    const router = useRouter()
    const [textColor, setTextColor] = useState('text-gray-500')

    useEffect(() => {
        router.asPath === href ? setTextColor('text-purple-500') : setTextColor('text-gray-500')
    }, [])

    const clickedLink = e => {
        if (!target) {
            e.preventDefault()
            router.push(href)
        }
    }

    return (
        <a href={href} onClick={clickedLink} className={cv ? 'text-white' : textColor} target={target ?? 'self'}>
            {children}
        </a>
    )
}

export default ActiveLink