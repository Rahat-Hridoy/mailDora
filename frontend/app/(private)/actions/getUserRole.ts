"use server"

import { getSession} from "@auth0/nextjs-auth0"
import { createAccessToken } from "./createAccessToken";

type Role = {
    id : string;
    name: string;
    description: string;
}

export async function getUserRole():Promise<Role[]> {
    const session = await getSession();
    const user = session?.user;

    if(!user){
        throw new Error("user not valid")
    }

    const token = await createAccessToken(); //need to create
    
    const response = fetch (
        `${process.env.AUTH0_DOMAIN}/api/v2/users/${user.sub}/roles`,
        {
            method: "GET",
            headers:{
                Accept: "application/json",
                Authotization: `Bearer${token}`,
            },
        }
    );

    if(!response.ok){
        throw new Error('failed to fetch user role')
    }

    const data:Role[]= await response.json();
    return data;

}