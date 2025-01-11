import { NextResponse } from 'next/server'
import { productLists } from '../../../../libs/db'
import React from 'react'
import { log } from 'node:console'

export const GET = async () => {
    return NextResponse.json({ data: productLists }, { status: 201 })
}

export const POST = async (request: Request) => {
    const data = await request.json()
    console.log(data);
    return NextResponse.json({ data: productLists }, { status: 200 })
}
