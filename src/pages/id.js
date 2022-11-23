import { useParams } from "react-router-dom";
import { Header } from "../components/Header";



function IdPage() {
    const {Id} = useParams();
  
    return (
      <section>
        <Header/>
        <h1>Página de ID {Id}</h1>
      </section>
    );
  }
  
  export default IdPage;
  