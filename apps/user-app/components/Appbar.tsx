import { Button } from './Button'
import { LogoutButton } from './LogoutButton'

interface AppbarProps {
    className?: string
}
export const Appbar = ({className}: AppbarProps) => {
    return (
        <div className="bg-stone-50 flex flex-col justify-center h-20 w-screen">
            <div className="flex justify-between items-center">
                <div className="text-4xl font-bold  ml-10 hover:">JWallet</div>
                <div className="">
                    <Button label={'Login'} className='mr-16 py-2 px-10 bg-green-900 text-fuchsia-50 text-2xl font-bold rounded-3xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...' />
                    <Button label={'Logout'} className='mr-16 py-2 px-10 bg-green-900 text-fuchsia-50 text-2xl font-bold rounded-3xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...' />
                    
                    {/* <LogoutButton/> */}
                </div>
            </div>
        </div>
    )
}