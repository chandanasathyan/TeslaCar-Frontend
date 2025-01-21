import styled from "@emotion/styled";
import { Box, Typography, IconButton } from "@mui/material";

const HeaderWrapper = styled(Box)(() => ({
    position: 'absolute',
    top: '30px',
    left: '0',
    width: '100%',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
    transition: 'all 0.3s ease',

    '@media (max-width: 768px)': {
        top: '20px',
    }
}));

const HeaderImgWrapper = styled(Box)(() => ({
    marginLeft: "50px",

    '@media (max-width: 768px)': {
        marginLeft: "20px",
    }
}));

const LogoImage = styled('img')(() => ({
    width: '130px',
    height: 'auto',
    transition: 'all 0.3s ease',

    '@media (max-width: 768px)': {
        width: '100px',
    },

    '@media (max-width: 480px)': {
        width: '80px',
    }
}));

const HeaderItemWrapper = styled(Box)(() => ({
    marginRight: "50px",

    '@media (max-width: 768px)': {
        display: 'none',
    }
}));

const HeaderItems = styled(Typography)(() => ({
    textTransform: "uppercase",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
    padding: "8px 16px",
    borderRadius: "4px",
    transition: "all 0.3s ease",
    letterSpacing: "1px",

    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    }
}));

const MobileMenuButton = styled(IconButton)(() => ({
    display: 'none',
    color: '#fff',
    marginRight: '20px',

    '@media (max-width: 768px)': {
        display: 'flex',
    }
}));

const MobileMenu = styled(Box)(({ open }) => ({
    display: 'none',

    '@media (max-width: 768px)': {
        display: open ? 'flex' : 'none',
        position: 'absolute',
        top: '10px',
        left: 0,
        right: 0,
        flexDirection: 'column',
        padding: '20px',
        transition: 'all 0.3s ease',
    }
}));

const MobileMenuItem = styled(Typography)(() => ({
    color: '#fff',
    fontSize: '16px',
    padding: '15px 20px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    letterSpacing: "1px",
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    }
}));

const LogoLink = styled(Box)(() => ({
    cursor: 'pointer',
    display: 'inline-flex',
    transition: 'opacity 0.3s ease',
    '&:hover': {
        opacity: 0.8,
    }
}));

export {
    HeaderWrapper,
    HeaderImgWrapper,
    HeaderItemWrapper,
    HeaderItems,
    LogoImage,
    MobileMenuButton,
    MobileMenu,
    MobileMenuItem,
    LogoLink,
};