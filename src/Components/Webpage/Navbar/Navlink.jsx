import { Link } from 'react-router-dom';
function Navlink({name,path}) {
    return (
      <Link to ={path}>{name}</Link>
    );
}
export default Navlink