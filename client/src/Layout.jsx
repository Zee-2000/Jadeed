import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";

const Layout = ({children}) =>
{
    return (
        <>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </>
    );
};
export default Layout;