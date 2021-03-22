import Navbar from './navigation/Navbar';
// import Credits from './mini-components/Credits';
import { useRouter } from 'next/router'

export default function Layout({ children }) {

    const currentPath = useRouter()
    let bgColor;

    console.log(currentPath)
    if (currentPath.pathname === "/species") {
        bgColor = false
    }

    // Navbar bgColor should come from redux
    return (
        <>
            <Navbar bgColor={bgColor} />
            {children}
            {/* <Credits /> */}
        </>
    )
}
