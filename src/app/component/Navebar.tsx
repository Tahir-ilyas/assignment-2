import Link from "next/link";

import {Montserrat} from "next/font/google"

const h1font = Montserrat({
    weight: ['400', '700'],
    style: 'normal',
    subsets: ['latin'],
    display: 'swap'
})

export default function Navebar(){
    return(
        <>
            <div className="w-[1290px] h-[91px] ml-[59px] mx-auto flex">
            <div className="w-[187px] h-[58px] mt-[17px] ml-[100px] text-bold">
                <h3 className={`w-[152px] h-[32px] mt-[13px] ${h1font.className} font-bold text-2xl leading-[32px] text-white`}>BrandName</h3>
            </div>
            <div className="w-[815px] h-[58px] mt-[16px] ml-[100px] py-3 justify-between items-center">
                <div className="w-[275px] h-[6px] mt-[17px] gap-[21px] ">
                    <ul className={`flex gap-[21px] ${h1font.className} text-white`}>
                        <li className="hover:text-[#23A6F0] w-[43px] h-[24px]"> <Link href="/"  >Home</Link></li>
                        <li className="hover:text-[#23A6F0] w-[59px] h-[24px]"> <Link href="/product">Product</Link></li>
                        <li className="hover:text-[#23A6F0] w-[52px] h-[24px]"> <Link href="/pricing">Pricing</Link></li>
                        <li className="hover:text-[#23A6F0] w-[58px] h-[24px]"> <Link href="/contact" >Contact</Link></li>   
                    </ul>
                </div>
                <div className="w-[189px] h-[52px] mt-[1px] ml-[600px] flex items-center gap-[45px]">
                    <div>
                        <button className={`w-[41px] h-[22px] ${h1font.className} font-bold text-sm text-white hover:text-[#23A6F0]`}>Login</button>
                    </div>
                    <div>
                        <button className={`w-[110px] h-[52px] rounded-[5px] py-[3px] px-[10px] gap-[15px] ${h1font.className}text-[12px] font-bold leading-[15px] bg-[#23A6F0] hover:bg-[#3990c2] text-white`}>JOIN US</button>
                    </div>

                </div>

            </div>
        

            </div>
           
           
          
           
            
        </>
    )
}