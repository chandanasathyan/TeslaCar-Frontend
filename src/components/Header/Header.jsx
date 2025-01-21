import { useState } from 'react';
import logo from "../../assets/tesla-logo-png-2244.png";
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
    HeaderWrapper,
    HeaderImgWrapper,
    HeaderItemWrapper,
    HeaderItems,
    MobileMenuButton,
    MobileMenu,
    MobileMenuItem,
    LogoImage,
    LogoLink
} from "./style";

const Header = () => {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleClick = () => {
        setMobileMenuOpen(false);
        navigate("/carlisting");
    };

    const handleLogoClick = () => {
        setMobileMenuOpen(false);
        navigate("/");
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <HeaderWrapper>
            <HeaderImgWrapper>
                <LogoLink onClick={handleLogoClick}>
                    <LogoImage
                        src={logo}
                        alt="Tesla Logo"
                        style={{ filter: "invert(100%) brightness(200%)" }}
                    />
                </LogoLink>
            </HeaderImgWrapper>

            <HeaderItemWrapper className="desktop-menu">
                <HeaderItems onClick={handleClick}>List of Cars</HeaderItems>
            </HeaderItemWrapper>

            <MobileMenuButton onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </MobileMenuButton>

            <MobileMenu open={mobileMenuOpen}>
                <MobileMenuItem onClick={handleClick}>
                    List of Cars
                </MobileMenuItem>
            </MobileMenu>
        </HeaderWrapper>
    );
};

export default Header;