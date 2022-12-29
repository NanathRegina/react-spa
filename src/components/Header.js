import { MainMenu } from "./MainMenu";
import { HeaderContainer } from "../styles/HeaderContainer";

export const Header = () => (
   <HeaderContainer>
        <h1>Meus filmes</h1>

        <MainMenu />
    </HeaderContainer>
);