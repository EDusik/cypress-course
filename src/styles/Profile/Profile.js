import styled from 'styled-components';

export const Profile = styled.div`
  
  display: flex;
  div {
    text-align: center;
    width: 100%;

    img {
      border: solid 5px #44475a;
      background: #f8f8f2;
      border-radius: 50%;
      width: 200px;
      height: 200px;
    } 

    h1 {
      font-size: 24px;
      font-weight: 400;
      letter-spacing: 5px;
      line-height: 25px;
      text-transform: uppercase;
      margin: 25px 0;
    }

    h2 {
      color: $light;
      font-size: 68px;
      font-weight: 700;
      line-height: 90px;
      text-transform: capitalize;
      text-decoration: none;
      display: block;        
      margin: 25px 0; 
    }

    h3 {
      font-size: 24px;
      font-weight: 400;
      letter-spacing: 5px;
      text-transform: uppercase;
      margin: 25px 0;
      line-height: 5;
    }

    p {
      text-align: center;
      max-width: 30%;
      font-size: 18px;
      display: inline-flex;
      margin: 0px 15px;
    }
  }
`;
