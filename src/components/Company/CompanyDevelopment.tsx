import { PhoneCall } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

const CompanyDevelopment = () => {
    return (
        <div className='px-8 flex items-center justify-center flex-col space-y-8'>
            <div>
                <div className='md:mx-32 mx-0 space-y-5'>
                    <h1 className='text-5xl max-sm:text-2xl font-bold text-center text-[#001628]'>Growth-Focused Development Solutions <br className='max-sm:hidden' />for Businesses and Communities</h1>
                    <p className='text-center'>Based in Pakistan, DevsCushion is a leader in the development industry, delivering tailored solutions that fuel business growth and empower communities. Our expert team provides top-tier development services designed to meet your specific needs and exceed expectations. We prioritize building lasting partnerships, driving innovation, and ensuring mutual success through every project.</p>
                </div>
            </div>
            <div>
                <Link href={'/contact'}>
                    <Button className="py-7 space-x-3 px-9 text-xl text-gray-50 hover:bg-[#7030A0] duration-200"><PhoneCall /> <p>Contact Us Today</p></Button>
                </Link>
            </div>
        </div>
    )
}

export default CompanyDevelopment