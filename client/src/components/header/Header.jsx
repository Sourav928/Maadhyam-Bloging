import { AppBar, Toolbar, styled, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Component = styled(AppBar)`
  background: #ffffff;
  color: black;
`;

const Image = styled("img")({
  width: 50,
});

const Container = styled(Toolbar)`
  justify-content: space-between;
  & > a {
    padding: 20px;
    color: #000;
    text-decoration: none;
  }
`;

const Marq = styled("marquee")`
  font-size: 20px;
`;
const LoginButton = styled(Button)`
  padding: 5px;
`;
const Header = () => {
  const navigate = useNavigate();

  //   const logout = async () => navigate("/account");
  const imageURL =
    "https://i.pinimg.com/280x280_RS/7c/bc/f4/7cbcf49bc436f750e8d4818256c1833b.jpg";

  return (
    <Component>
      <Container>
        <Link to="/">
          <Image src={imageURL} alt="blog" />
        </Link>
        <Box>
          <Marq>
            "Unleash Your Thoughts, Craft Your Voice - Your Journey in through
            Maadhyam."
          </Marq>
        </Box>
        <Link to="/account">
          <LoginButton variant="outlined">Logout</LoginButton>
        </Link>
      </Container>
    </Component>
  );
};

export default Header;
