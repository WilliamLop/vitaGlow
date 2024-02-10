import React from 'react'

const ItemInfo = ({ name, desc}) => {
    return (
        <>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm lg:text-lg font-semibold leading-6 text-blackText">{name}</dt>
                <dd className="mt-2 text-sm lg:text-base leading-6 text-grayText sm:col-span-2 sm:mt-0">{desc}</dd>
            </div>
        </>
    )
}

export default ItemInfo