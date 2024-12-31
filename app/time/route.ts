import {type NextRequest} from 'next/server'

export async function GET(){
    return Response.json({
        time:new Date().toLocaleTimeString()
    })
}