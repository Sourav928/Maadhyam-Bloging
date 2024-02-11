import { styled, Box, Typography } from "@mui/material";

const Image = styled(Box)`
  width: 100%;
  background: url(https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
    center/80%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #ffffff;
  line-height: 1;
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  color: #ffffff;
`;

const Banner = () => {
  return (
    <Image>
      <Heading>Maadhyam</Heading>
      <SubHeading>Manifest Your Musings.</SubHeading>
    </Image>
  );
};

export default Banner;
