"use server";

export default async (prevState: FormData, formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    return { message: "success" };
};
