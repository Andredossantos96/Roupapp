import React, { Component }  from "react"
import Main from "../templete/Main"

const headerProps = {
    icon: 'users',
    title: 'Usuarios',
    subtitle: 'Cadastro de alunos da Faculdade Impacta!'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}