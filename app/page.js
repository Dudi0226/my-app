"use client"
import { useRouter } from "next/navigation";
import Form from "./sections/Form";

export default function Page() {
    const router = useRouter();
    const auth_token = localStorage.getItem("token");

    if (auth_token) {
        console.log("z");
        router.push('/home')
    }

    return <Form />;h
}