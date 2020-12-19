import styled from 'styled-components';

export const Profile = styled.div`

  display: flex;
  div {
    text-align: center;
    width: 100%;

    img {
      border: solid 5px ${props => props.theme.current_line};
      background: ${props => props.theme.foreground};
      border-radius: 50%;
      width: 200px;
      height: 200px;
    } 

    h1 {
      color: ${props => props.theme.foreground};
      font-size: 24px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 5px;    
      text-transform: uppercase;
      margin: 25px 0;
    }

    h2 {
      color: ${props => props.theme.green};
      font-size: 18px;
      font-weight: 700;
      text-transform: capitalize;      
      text-decoration: none;
      display: block;        
      margin: 15px 0; 
    }

    span {
      color: ${props => props.theme.yellow};
      font-size: 18px;
      text-align: center;     
      display: block;    
      margin: 20px 0;
    }

    p {
      color: ${props => props.theme.orange};
      font-size: 18px;
      text-align: center;
      max-width: 30%;     
      display: inline-flex;
      margin: 0px 15px;
    }
  }
`;
