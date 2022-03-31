import { SideMenu, SideLink, Container} from './styles'



function Sidebar({ isOpen, toggle } ) {
    return (

        <Container isOpen={isOpen} toggle={toggle}>
            <SideMenu>
                <SideLink to= 'informations' smooth={true} duration={1000} onClick={toggle}> Início </SideLink>
                <SideLink to= 'About' smooth={true} duration={1000} onClick={toggle}> Sobre </SideLink>
                <SideLink to= 'skills' smooth={true} duration={1000} onClick={toggle}> Habilidades </SideLink>
                <SideLink to= 'projects' smooth={true} duration={1000} onClick={toggle}> Portifolio </SideLink>
            </SideMenu>
        </Container>

    );
}

export default Sidebar;
