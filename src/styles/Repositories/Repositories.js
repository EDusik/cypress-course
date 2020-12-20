import styled from 'styled-components';

export const Repositories = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 22vh;
    margin-top: 15px;

    i {
      color: ${props => props.theme.comment};
      font-size: 14px;
    }
    
    a {
      color: ${props => props.theme.purple};
      font-size: 16px;      
      display: inherit;
      line-height: 2.6;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    
    .repository {
      background-color: ${props => props.theme.current_line};
      padding: 12px 18px;
      color: ${props => props.theme.foreground};
      border-radius: 20px;
      line-height: .2;
      font-size: 15px;
      margin: 15px 15px;
      flex: 1 1 340px;
      display: grid;
      min-height: 180px;
    }
    
    p {
      line-height: 1.2;
      color: ${props => props.theme.foreground};
    }

    span.language {
      color: ${props => props.theme.red};
    }
      
    p.no-repo {
      text-align: center;
      width: 100%;
      color: ${props => props.theme.cyan};
    }
  }
`;
