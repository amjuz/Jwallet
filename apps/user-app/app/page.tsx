

import { getServerSession } from 'next-auth'
import { authOptions } from './lib/auth'
import { redirect } from 'next/navigation'

export default async function Page(){
  const session = await getServerSession(authOptions);
  
  if(!session){
    redirect("/api/auth/signin")
  } else {
    redirect("/dashboard")
  }
}


// export default async function Page(){
//   const session = await getServerSession(authOptions);
//   return <div className="">
//     <h1>
//       users landing page<hr/>
//       server component{JSON.stringify(session)}
//       <LogoutButton/>
//     </h1>
//   </div>
// }