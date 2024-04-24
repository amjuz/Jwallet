
import { Balance } from '../components/Balance'
import { BalanceCommon } from '@repo/components/BalanceCommon'

export default function Home(){
  return(
    <div className="flex flex-col  w-max">
      <div className="">
        mechants page
      </div>
      <div className="bg-orange-500">
        merchant component: <Balance/>
      </div>
      <div className="bg-slate-500">
        common file: <BalanceCommon/>
      </div>
    </div>
  )
}