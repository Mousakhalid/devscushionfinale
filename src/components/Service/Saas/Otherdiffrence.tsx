import React from 'react'
import IssuesListSaas from './Issues'
import Ours from './Ours'

const Difference = () => {
    return (
        <div className='py-16 px-8'>
            <div>
                <div className='flex md:flex-row flex-col items-center justify-between gap-5'>
                    <div>
                        <h2 className='text-xl font-semibold text-gray-700 py-4'>Other SaaS Development Services</h2>
                        <IssuesListSaas />
                    </div>
                    <div className="vertical-line max-sm:hidden">

                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-700 py-4'>DevsCushions' SaaS Development Services</h2>
                        <Ours />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Difference