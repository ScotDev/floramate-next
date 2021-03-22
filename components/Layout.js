import Navbar from './navigation/Navbar';
// import Credits from './mini-components/Credits';
export default function Layout({ children }) {


    return (
        <>
            <Navbar />
            {children}
            {/* <Credits /> */}
        </>
    )
}
