import Header from "../Header";
import Personselect from "../components/Personselect";
import Sendinvite from "../components/Sendinvite";

function Layout({ children }) {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <div className="col-6">
          <Personselect />
        </div>
        <div className="col-6">
          <Sendinvite />
        </div>
      </div>
    </div>
  );
}

export default Layout;
