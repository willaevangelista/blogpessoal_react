import axios from "axios"

const api = axios.create({
    baseURL: 'https://blog-pessoal-java.onrender.com'
})

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const buscarInformacoes = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.get(url, dados)
    setDados(resposta.data)
}