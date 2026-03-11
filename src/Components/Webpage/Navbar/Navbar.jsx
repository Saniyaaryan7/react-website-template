import Navlink from './Navlink'
function Navbar() {
    return(
        <nav>
        <Navlink  name="Home" path="/"/>
        <Navlink  name="About" path="/about"/>
        <Navlink  name="Services" path="/services"/>
        <Navlink  name="Contact" path="/contact"/>
</nav>
    );
}
export default Navbar