import React from 'react'
import IssuesList from './IssuesList'
import Checklist from './US'

const Difference = () => {
    return (
        <div className='py-16 px-8'>
            <div>
                <div className='flex md:flex-row flex-col items-center justify-between gap-5'>
                    <div>
                        <h2 className='text-xl font-semibold text-gray-700 py-4'>Other UI UX Design Services</h2>
                        <IssuesList />
                    </div>
                    <div className="vertical-line max-sm:hidden">

                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-gray-700 py-4'>DevsCushions' UI UX Design Services</h2>
                        <Checklist />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Difference