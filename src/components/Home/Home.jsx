import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { apiDatas } from "../../ApiSlice/ApiSlice";
import banner from "../../assets/tesla-banner.jpg";
import {
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
} from "./style";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [activeSection, setActiveSection] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const { apiData } = useSelector((state) => state.api);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sectionsRef = useRef([]);

  const items = { src: banner, label: "", path: "demo-drive", dark: false, buttonText: "Order Now" }


  useEffect(() => {
    dispatch(apiDatas());

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop - windowHeight / 2) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  const handleLearnMore = (id) => {
    navigate(`/cardetails/${id}`);
  };

  const scrollToNext = (currentIndex) => {
    if (currentIndex < items.length - 1) {
      const nextSection = sectionsRef.current[currentIndex + 1];
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <MainContainer>
      <SectionStyle
      >
        <ImageContainer>
          <ImageStyle src={items.src} alt={items.label} />
        </ImageContainer>

        <ContentContainer>
          <HeaderContainer>
            <TitleText variant="h1" dark={items.dark}>{items?.label}</TitleText>
          </HeaderContainer>

          <ButtonContainer>
            <ButtonGroup>
              <PrimaryButton dark={items.dark} onClick={() => handleLearnMore(items?.path)}>
                view more
              </PrimaryButton>
              <SecondaryButton dark={items.dark} onClick={() => handleLearnMore("inventory")}>
                Inventory
              </SecondaryButton>
            </ButtonGroup>
          </ButtonContainer>
        </ContentContainer>
      </SectionStyle>


      {apiData && apiData?.map((item, index) => (
        <SectionStyle
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="tesla-section"
        >
          <ImageContainer>
            <ImageStyle src={item.img} alt={item.label} />
          </ImageContainer>

          <ContentContainer>
            <HeaderContainer>
              <TitleText variant="h1" dark={item.dark}>{item?.label}</TitleText>
            </HeaderContainer>

            <ButtonContainer>
              <ButtonGroup>
                <PrimaryButton dark={item.dark} onClick={() => handleLearnMore(item?._id)}>
                  view more
                </PrimaryButton>
              </ButtonGroup>

              {index < items.length - 1 && (
                <ScrollIndicatorBtn
                  dark={item.dark}
                  onClick={() => scrollToNext(index)}
                  aria-label="Scroll to next section"
                >
                  <KeyboardArrowDownIcon style={{ fontSize: "32px" }} />
                </ScrollIndicatorBtn>
              )}
            </ButtonContainer>
          </ContentContainer>
        </SectionStyle>
      ))}
    </MainContainer>
  );
};

export default Home;

