import { NextResponse } from 'next/server'
import { productLists } from '../../../../libs/db'
import React from 'react'

export const GET = async () => {
   
    return NextResponse.json({ data: productLists }, { status: 200 })

}
