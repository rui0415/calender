
import { createClient } from "../../../utils/supabase/server"
import Calendar from "./ui/Calender"

export default async function Home(){
    const supabase = createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()

    return <Calendar user={user}/>
}