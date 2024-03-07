import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link to="/e-commerce/" className="text-decoration-none">
        <i className="bi bi-shop-window fs-4 text-warning "></i><a className="navbar-brand" href="#">Shopify</a>
        
      </Link>
      <div className="input-group w-75 ">
       <input type="text" className="form-control " placeholder="Search product..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
       
         <span className="input-group-text bg-warning" id="basic-addon2"><Link to="/e-commerce/SearchedProduct"><i className="bi  bi-search"></i> </Link></span>
        
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto ms-2 mb-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link active " aria-current="page" href="#">
             <Link to="/e-commerce/login" className="text-decoration-none text-white d-flex flex-column" > 
             <small >hello,Guest</small> 
            <strong >Sign-in</strong> 
            </Link>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link active " aria-current="page" href="#">
              <small>your</small> <strong>shop</strong>
            </a>
          </li>
          <li className="nav-item ">
            <Link to="/e-commerce/checkout" className="nav-link active d-flex" aria-current="page" href="#">
              <i className="bi bi-basket2 text-white me-2 fs-5"></i><span className="mt-1 ml-1">{props.size}</span>
              
            </Link>
          </li>
          
          
        </ul>
        
      </div>
    </div>
  </nav>
  );
}
export default Header;
