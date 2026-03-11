"use client";

import { useState, useActionState, useEffect, SubmitEvent } from "react";
import login, { LoginState } from "../actions/login";

const initialState: LoginState = { message: "" };

export default () => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState<undefined | string>(undefined);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState<undefined | string>(undefined);
    const [error, setError] = useState("");

    const [loginState, loginAction, isPending] = useActionState(login, initialState);

    const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        if (nameError !== undefined) {
            setNameError(e.target.value ? "" : "Username is required");
        }
    };

    const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (passwordError !== undefined) {
            setPasswordError(e.target.value ? "" : "Password is required");
        }
    };

    useEffect(() => {}, [loginState]);

    const submitHandler = (e: SubmitEvent<HTMLFormElement>) => {
        console.log("submitHandler called");
        let valid = true;
        if (!name) {
            setNameError("Username is required");
            valid = false;
        }
        if (!password) {
            setPasswordError("Password is required");
            valid = false;
        }
        if (!valid) {
            e.preventDefault();
        }
    };

    return (
        <form action={loginAction} onSubmit={submitHandler}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    User name
                </label>
                <input
                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    value={name}
                    onChange={nameChangeHandler}
                />
                {nameError && <p className="text-red-500 text-xs italic">{nameError}</p>}
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    value={password}
                    onChange={passwordChangeHandler}
                />
                {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}
            </div>
            <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Sign In
                </button>
            </div>
            {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
        </form>
    );
};
