import { redirect } from "next/dist/server/api-utils";
import { isUserAdmin } from "../(private)/actions/isUserAdmin";
import { NextRequest } from "next/server";

export async function GET {
 const isAdmin = await isUserAdmin();
 
 if(!isAdmin){
    return redirect('/')
 }
  return NextRequest.json({
    protected: "Hello admin"
  })

}