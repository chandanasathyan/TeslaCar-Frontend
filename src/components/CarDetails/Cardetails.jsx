import { useEffect, useState, } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CardContent, CardHeader, Typography } from "@mui/material";
import {
  StyledCard,
  ColorButton,
  SectionTitle,
  Description,
  VariantsGrid,
  VariantCard,
  SpecsList,
  PageContainer,
  CarImage,
  ColorSelectorWrapper,
  Section
} from "./style";
import { useDispatch, useSelector } from 'react-redux';
import { selectedCarApi } from '../../ApiSlice/ApiSlice';

const CarDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState('red');

  console.log('Current model param:', id);

  const { selectedCar } = useSelector((state) => state.api)

  useEffect(() => {
    dispatch(selectedCarApi(id))

  }, [dispatch, id])
  console.log(selectedCar, "selectedCar")

  if (Object.keys(selectedCar).length == 0) return null
  return (
    <div style={{ background: "#BFBFBD" }}>
      <PageContainer>
        <StyledCard>
          <CardHeader
            title={<Typography variant="h4">{selectedCar?.name}</Typography>}
            subheader={
              <Typography variant="h5" sx={{ color: "#333", margin: "1rem 0", fontWeight: 500 }}>
                Starting at {selectedCar?.startingPrice}
              </Typography>
            }
          />
          <CardContent>
            <CarImage
              src={selectedCar?.colors?.[selectedColor]}
            // alt={`${selectedCar?.name} in ${selectedColor}`}
            />

            <Section>
              <SectionTitle>Select Color</SectionTitle>
              <ColorSelectorWrapper>
                {Object?.keys(selectedCar?.colors).map((color) => (
                  <ColorButton
                    key={color}
                    color={color}
                    selected={selectedColor === color}
                    onClick={() => setSelectedColor(color)}
                    aria-label={color}
                  />
                ))}
              </ColorSelectorWrapper>
            </Section>

            <Section>
              <SectionTitle>Description</SectionTitle>
              <Description>{selectedCar?.description}</Description>
              <Typography>Range:{selectedCar?.range}</Typography>
              <Typography>Acceleration:{selectedCar?.acceleration}</Typography>
              <Typography>topSpeed:{selectedCar?.topSpeed}</Typography>
            </Section>

            <Section>
              <SectionTitle>Available Variants</SectionTitle>
              <VariantsGrid>
                {selectedCar?.variants?.map((variant, key) => (
                  <VariantCard key={key}>
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom>
                        {variant?.name}
                      </Typography>
                      <SpecsList>
                        <li>Range: {variant?.range}</li>
                        <li>Acceleration: {variant?.acceleration}</li>
                        <li>Top Speed: {variant?.topSpeed}</li>
                      </SpecsList>
                    </CardContent>
                  </VariantCard>
                ))}
              </VariantsGrid>
            </Section>
          </CardContent>
        </StyledCard>
      </PageContainer >
    </div>
  );
};

export default CarDetails;