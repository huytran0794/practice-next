import React from 'react'

type Props = {}

const Page = ({ params }: { params: { slug: string } }) => {
    console.log(params);
    return (
        <div>{params.slug}</div>
    )
}

export default Page