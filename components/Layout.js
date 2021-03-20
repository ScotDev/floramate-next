import Navbar from './navigation/Navbar';

export default function Layout({ children }) {
    return (
        <>
            <Navbar bgColor={"red"} scrolling={false} />
            {children}
        </>
    )
}
