import React from 'react'
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@mui/icons-material";
  import styled from "styled-components";
import { Link } from 'react-router-dom';
  
  const Container = styled.div({
    display: "flex",
  });
  
  const Left = styled.div({
    flex: "1",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  });
  
  const Logo = styled.h1({});
  
  const Desc = styled.p({
    margin: "20px 0px",
  });
  
  const SocialContainer = styled.div({
    display: "flex",
  });
  
  const SocialIcon = styled.div({
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    color: "white",
    display: "flex",
    alignIteams: "center",
    justifyContent: "center",
    marginRight: "20px",
  });
  
  const Center = styled.div({
    flex: "1",
    padding: "20px",
  });
  
  const Title = styled.h3({
    marginBottom: "30px",
  });
  
  const List = styled.ul({
    margin: "0",
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
  });
  
  const ListItem = styled.li({
    width: "50%",
    marginBottom: "10px",
  });
  
  const Right = styled.div({
    flex: "1",
    padding: "20px",
  });
  
  const ContactItem = styled.div({
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
  });
  
  const Payment = styled.img({
    width: "50%",
  });
const Footer = () => {
  return (
    <div style={{backgroundColor:'lightgrey',marginTop:'30px'}}>
 <Container>
        <Left>
          <Logo>Mushroom Ayurved </Logo>
          <Desc>
          Mushroom World Ayurved & Food Private Limited is a Registered Private Limited Company registered under the Companies act 1956
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>SHOP</Title>
          <List>
            <ListItem>Triphala</ListItem>
            <ListItem>Brahmi</ListItem>
            <ListItem>Neem</ListItem>
            <ListItem>Guggulu</ListItem>
            <ListItem>Bhringraj</ListItem>
            <ListItem>Shankhapushpi</ListItem>
            <ListItem>Yashtimadhu</ListItem>
            <ListItem>Kutki</ListItem>
            <ListItem>Vidanga</ListItem>
            <ListItem>Punarnava</ListItem>
          </List>
        </Center>
        <Link to={"/Contactus"} style={{textDecoration:'none',color:"black"}}>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} />
            Hyderabad, Kompally, Telangana-501401
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +91- 9826322445

          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} />{" "}
            Info@mushroomworldbpl.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
        </Link>

      </Container>
    </div>
  )
}

export default Footer