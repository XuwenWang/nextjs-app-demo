"use server";

export interface LoginState {
    message: string;
}
export async function login(prevState: LoginState, formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    return { message: "success" };
}
