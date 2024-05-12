"use server"
import { createClient } from "../../../../utils/supabase/client";
import { redirect } from "next/navigation";

export async function signout() {
    const supabase = createClient()
    const {error} = await supabase.auth.signOut()
    if (!error){
        redirect('/signin')
    }
}