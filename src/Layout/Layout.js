import Header from "../Header";
import Personselect from "../components/PersonSelect";

function Layout({}) {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <div className="col-12">
          <Personselect />
        </div>
      </div>
    </div>
  );
}

export default Layout;
