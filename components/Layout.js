import Navbar from './navigation/Navbar';
// import Credits from './mini-components/Credits';

export default function Layout({ children }) {

    // Navbar bgColor should come from redux
    return (
        <>
            <Navbar bgColor={false} scrolling={true} />
            {children}
            {/* <Credits /> */}
        </>
    )
}
