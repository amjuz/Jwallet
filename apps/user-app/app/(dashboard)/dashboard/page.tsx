import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth";

export  default async function () {
    const session = await getServerSession(authOptions);
    return(
        <div className="">
            <div className="">
                Dashboard
            </div>
            server component{JSON.stringify(session)}
        </div>
    )
}