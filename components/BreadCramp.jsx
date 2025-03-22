import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

function BreadCramp() {
    const router = useRouter();
    const pathSegments = router.asPath.split('/').filter(segment => segment);

    return (
        <div className="flex py-4 px-5 bg-[#F2F4F5]" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse w-3/4 mx-auto">
                <li className="inline-flex items-center">
                    <Link href="/" passHref>
                        <div className="inline-flex items-center text-xs font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-[#5F6C72]">
                            <Image src="/Assets/homeicon.svg" alt="Home" width={13} height={14} className="me-2.5" />
                            Home
                        </div>
                    </Link>
                </li>
                {pathSegments.map((segment, index) => (
                    <li key={index} className="inline-flex items-center">
                        <div className="flex items-center">
                            <Image src="/Assets/carerighticon.svg" alt="Arrow" width={4} height={8} className="rtl:rotate-180 mx-1" />
                            <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`} passHref>
                                <div className="inline-flex items-center text-xs font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-[#5F6C72]">
                                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                                </div>
                            </Link>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default BreadCramp;
