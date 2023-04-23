import styled from "styled-components";

export const Dropdown = styled.div`
  width: 1.87rem;
  margin: 0;
  position: relative;
  user-select: none;
`;

export const DropdownBtn = styled.div`
  padding: 5px 0px 5px 0px;
  background-color: rgba(255, 255, 255, 0);
  font-weight: bold;
  color: ${(props) => props.theme.colors.especial.branco};
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 1.875rem;
    height: 1.875rem;
  }
`;

export const DropdownConteudo = styled.div`
  position: absolute;
  margin-top: 25%;
  padding: 5px 0 5px 0;
  background-color: rgba(255, 255, 255, 0);
  color: ${(props) => props.theme.colors.especial.branco};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  svg {
    width: 1.875rem;
    height: 1.875rem;
  }
`;

export const DropdownItem = styled.div`
  margin-left: -3px;
  padding: 5px;
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    opacity: 0.7;
  }
`;
