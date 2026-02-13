"use server"

import { auth0 } from "@/lib/auth0";
// import { createAccessToken } from "./createAccessToken";

type Role = {
    id : string;
    name: string;
    description: string;
}

export async function getUserRole():Promise<Role[]> {
    const session = await auth0.getSession();
    const user = session?.user;

    console.log( 'user role:', user?.sub)

    if(!user){
        throw new Error("user not valid")
    }

    const token = `${process.env.AUTH_TOKEN}`

    console.log(user.sub)
    const response = await fetch (
        `${process.env.AUTH0_DOMAIN}/api/v2/users/${user.sub}/roles`,
        {
            method: "GET",
            headers:{
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );
    
    if(!response.ok){
        throw new Error('failed to fetch user role')
    }
    
    const data:Role[]= await response.json();

    return data;

}