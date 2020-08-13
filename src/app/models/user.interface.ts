export type Rol = "usuario" | "admin";

export interface User {
  usuario: string;
  password: string;
}

export interface UserResponse {
  message: string;
  token: string;
  idusuariosistema: string;
  rol: Rol;
}
