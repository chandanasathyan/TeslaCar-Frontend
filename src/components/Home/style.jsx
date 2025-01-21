import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

const MainContainer = styled('div')(() => ({
  height: "100vh",
  overflowY: "auto",
  scrollSnapType: "y mandatory",
  position: "relative",
  "@media (max-width: 768px)": {
    height: "auto",
  },
}));

const SectionStyle = styled('section')(() => ({
  height: "100vh",
  width: "100%",
  position: "relative",
  scrollSnapAlign: "start",
  "@media (max-width: 768px)": {
    height: "auto",
  },
}));

const ImageContainer = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  "@media (max-width: 768px)": {
    position: "relative",
  },
}));

const ImageStyle = styled('img')(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  "@media (max-width: 768px)": {
    height: "auto",
  },
}));

const ContentContainer = styled('div')(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "100px 40px 120px 40px",
  "@media (max-width: 768px)": {
    padding: "40px 20px",
  },
}));

const HeaderContainer = styled(Box)(() => ({
  textAlign: "center",
  marginBottom: "20px",
  marginTop: "-40px",
  "@media (max-width: 768px)": {
    marginTop: "0",
  },
}));

const ButtonContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
  marginBottom: "-70px",
  "@media (max-width: 768px)": {
    marginBottom: "-20px",
    gap: "0px",
  },
}));

const ButtonGroup = styled(Box)(() => ({
  display: "flex",
  gap: "24px",
  justifyContent: "center",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: "10px",
  },
}));

const PrimaryButton = styled(Button)(({ dark }) => ({
  backgroundColor: dark ? '#ffffff' : '#000000',
  color: dark ? '#000000' : '#ffffff',
  padding: '12px 80px',
  borderRadius: '4px',
  fontSize: '14px',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  border: 'none',
  cursor: 'pointer',
  transition: 'opacity 0.3s',
  opacity: 0.9,
  '&:hover': {
    opacity: 1,
  },
  "@media (max-width: 768px)": {
    padding: "5px 20px",
    fontSize: "10px",
  },
  "@media (max-width: 425px)": {
    padding: "3px 8px",
    fontSize: "6px",
  },
}));

const SecondaryButton = styled(Button)(({ dark }) => ({
  backgroundColor: dark
    ? "rgba(23, 26, 32, 0.8)"
    : "rgba(255, 255, 255, 0.65)",
  color: dark ? "#ffffff" : "#000000",
  padding: "12px 80px",
  borderRadius: "4px",
  fontSize: "14px",
  fontWeight: "500",
  textTransform: "uppercase",
  letterSpacing: "1px",
  border: "none",
  cursor: "pointer",
  transition: "opacity 0.3s",
  opacity: 0.9,
  "@media (max-width: 768px)": {
    padding: "5px 20px",
    fontSize: "10px",
  },
  "@media (max-width: 425px)": {
    padding: "3px 8px",
    fontSize: "6px",
  },
}));

const TitleText = styled(Typography)(() => ({
  fontSize: '40px',
  fontWeight: 700,
  color: '#ffffff',
  marginBottom: '8px',
  letterSpacing: '0.5px',
  "@media (max-width: 768px)": {
    fontSize: "28px",
    marginBottom: "16px",
  },
  "@media (max-width: 425px)": {
    fontSize: "18px",
    marginBottom: "16px",
  },
}));

const ScrollIndicatorBtn = styled(Button)(() => ({
  animation: 'bounce 2s infinite',
  color: '#ffffff',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  padding: '8px',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  "@media (max-width: 768px)": {
    padding: '6px',
  },
}));

export {
  MainContainer,
  SectionStyle,
  ImageContainer,
  ImageStyle,
  ContentContainer,
  HeaderContainer,
  ButtonContainer,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  TitleText,
  ScrollIndicatorBtn,
};

