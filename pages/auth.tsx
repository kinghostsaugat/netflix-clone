import Input from "@/components/Input";
import { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("")
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] ng-no-repeat bg-center bg-cover bg-fixed">
            <div className="bg-black h-full w-full bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12"/>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 md:w-3/5 lg:max-w-md md:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign In
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Input
                            label="Username"
                            onChange={(e) => {setEmail(e.target.value)}}
                            id="name"
                            type="text"
                            value={name}
                             />
                            <Input
                            label="Email"
                            onChange={(e) => {setEmail(e.target.value)}}
                            id="email"
                            type="email"
                            value={email}
                             />
                            <Input
                            label="Email"
                            onChange={(e) => {setEmail(e.target.value)}}
                            id="email"
                            type="email"
                            value={email}
                             />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;