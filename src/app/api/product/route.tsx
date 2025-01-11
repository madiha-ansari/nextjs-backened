import { NextResponse } from 'next/server'
import { productLists } from '../../../../libs/db'
import React from 'react'

export const GET = async () => {
    return NextResponse.json({ data: productLists }, { status: 201 })
}


export const POST = async () => {
    return NextResponse.json({ data: productLists }, { status: 201 })
}