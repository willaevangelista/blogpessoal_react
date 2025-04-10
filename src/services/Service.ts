import axios from "axios"
import Tema from "../models/Tema"

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

export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const cadastrar = async (url: string, tema: Tema, setDados: Function, header: Object) => {
    const resposta = await api.post(url, header)
    setDados(resposta.data)
}

export const atualizar = async (url: string, tema: Tema, setDados: Function, header: Object) => {
    const resposta = await api.put(url, header)
    setDados(resposta.data)
}

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header)
}