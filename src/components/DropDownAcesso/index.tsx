import Link from "next/link";
import React, { useState } from "react";
import { Dropdown, DropdownBtn, DropdownConteudo, DropdownItem } from "./style";
import { ExpandMore, AccountCircle } from "@material-ui/icons";

const DropDownAcesso: React.FC = () => {
  const [ativo, setAtivo] = useState(false);

  /*onClick={() => setAtivo(!ativo)}*/

  return (
    <Dropdown>
      <DropdownBtn onClick={() => setAtivo(!ativo)}>
        <AccountCircle />
        <ExpandMore />
      </DropdownBtn>
      {ativo && (
        <DropdownConteudo onMouseLeave={() => setAtivo(false)}>
          <DropdownItem
            onClick={() => {
              setAtivo(false);
            }}
            
          >
            <Link href="../../admin/login">Login</Link>
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              setAtivo(false);
            }}            
          >
            <Link href="../../admin/cadastro">Cadastre-se</Link>
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              setAtivo(false);
            }}            
          >
            <Link href="../../admin/dashboard">Painel</Link>
          </DropdownItem>
        </DropdownConteudo>
      )}
    </Dropdown>
  );
};

export default DropDownAcesso;
