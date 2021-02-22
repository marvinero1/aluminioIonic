export interface AccessData {
    access_token: string;
    refresh_token: string;
}
export interface ILoginData {
    provider: string;
    provider_user_id: string;
    nombre:string;
    email:string;
}
export interface ILogin {
    email: string;
    password: string;
}
export interface IUser {
    id: number;
    nombre: string;
    empresa?: string;
    ci?: string;
    telefono?: string;
    celular: string;
    usuario: string;
    email?: string;
    password?: string;
    c_password?: string;
    tipo: string;
}

export interface IUsuario {
    id: number;
    alias: string;
    avatar_id: number;
    usuario: string;
    password: string;
}


export interface IMiss {
    id: number;
    nombre?: string;
    candidata?: number;
    descripcion?: string;
    edad?: string;
    estudio?: string;
    social?: string;
    lugar?: string;
    hobbi?: string;
    facebook?: string;
    twitter?: string;
    instagrand?: string;
    video?: string;
    tipo?: string;
    imagens?:any;
    personausers?:any;
    personausers_count?:number;
}