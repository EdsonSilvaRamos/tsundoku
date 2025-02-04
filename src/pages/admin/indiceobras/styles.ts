import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SecaoTitulo = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-top: 20px;    
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 474px) {
      margin-bottom: 40px;
    }

`;

export const SecaoIndiceCapitulos = styled.div`
    width: 600px;
    margin-bottom: 10px;
    padding: 10px 0 10px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    >h2{
        margin-bottom: 10px;
    }

    @media(max-width: 474px) {
      width: 350px;
    }
`;

export const SecaoConteudoCapitulos = styled.div`
    width: 90%;
    margin: 10px 0 10px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;   
`;

export const SecaoBotoesAdicao = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;

    @media(max-width: 474px) {
      flex-direction: column;
    }
`;

export const BotaoAlteracao = styled.button`
  width: 150px;
  height: 30px;
  color: ${(props) => props.theme.colors.branca};
  font-size: 10pt;
  border-radius: 3px;
  margin: 10px;  

  &.sucesso {
    background: ${(props) => props.theme.colors.sucesso};
  }

  &.aviso {
    background: ${(props) => props.theme.colors.aviso};
  }

  &.secundaria {
    background: ${(props) => props.theme.colors.secundaria};
  }

  :hover {
    opacity: 0.7;
  }

  > a{
    color: ${(props) => props.theme.colors.branca};
    text-decoration: none;
  }

`;

export default Container;
