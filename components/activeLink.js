import { useRouter } from 'next/router'

function ActiveLink({ children, href, cv = false, target }) {
    const router = useRouter()

    const style = {
        className: router.asPath === href ? 'text-purple-500' : 'text-gray-500'
    }

    const clickedLink = e => {
        if(!target) {
            e.preventDefault()
            router.push(href)
        }
    }

    return (
        <a href={href} onClick={clickedLink} className={cv ? 'text-white' : style.className} target={target ?? 'self'}>
            {children}
        </a>
    )
}

export default ActiveLink