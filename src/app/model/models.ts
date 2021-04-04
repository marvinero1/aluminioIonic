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
export interface IFavoritos {
    id: number;
    nombre?: string;
    precio?: number;
    color?: string;
    codigo?: string;
    imagen?: string;
    importadora?: string;
    estado?: string;
    user_id: number;
    productos_id: number;
}


export interface IPedido {
    id: number;
    nombre?: string;
    estado?: string;
    imagen?: string;
    precio?: number;
    color?: string;
    ancho?: string;
    codigo?: string;
    alto?: string;
    puntuacion?: string;
    descripcion?: string;
    importadora?: string;
    novedad?: string;
    categorias_id?: number;
    subcategorias_id?:number;
    favoritos_id?:number;
    disponibilidad?:string;
    tipo_medida?:string;
    user_id: number;
    cantidad_pedido: number;

}
export interface ICalculadora {
    id: number;
    nombre: string;
    numero1: number;
    numero2: number;
    resultado: number;
}