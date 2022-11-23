import { useNavigate } from "react-router-dom";
import { goToHomePage,goToProfilePage, goToId } from "../Router/coord";

export function Header(){
    const navigate = useNavigate()

    return(
        <header>
            <button onClick={()=> goToHomePage(navigate)}>
                Ir para Home
            </button>
            <button onClick={()=> goToProfilePage(navigate, "Bruno")}>
                Ir para Perfil
            </button>
            <button onClick={()=> goToId(navigate, "20")}>
                Ir para ID
            </button>
        </header>
    )
}