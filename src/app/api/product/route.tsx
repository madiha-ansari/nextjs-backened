import { NextResponse } from 'next/server'
import { productLists } from '../../../../libs/db'

export const GET = async () => {
    return NextResponse.json({ data: productLists }, { status: 201 })
}

export const POST = async (request: Request) => {
    const data = await request.json()
    console.log(data);
    return NextResponse.json({ data: productLists }, { status: 200 })
}


// export const PATCH = async (request: Request) => {
//     const data = await request.json()
//     console.log(data);
//     return NextResponse.json({ data: productLists }, { status: 200 })
// }