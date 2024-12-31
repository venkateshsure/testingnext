
'use server'

import axios from 'axios';
import { redirect } from 'next/navigation';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react';


export default async function fetchTeam({ params }: { params: { id: string } }) {
    // Here, `params.id` is directly used without awaiting
    // /team/[id]-->> /team/200 -->> params={id:'200'}
    const response = await axios.get(`http://localhost:4000/actors/${params.id}`);
    console.log("response--------------",response,"-----------response");
    const data =  response.data;
    console.log("-----------------",data);
    if(data.length===0){
        redirect('/getposts')
    }

    return (
        <div>
            <h1>Team Data</h1>
            <ul>
                {
                    data.map((each: {
                        last_update: ReactNode; actor_id: Key ; first_name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; last_name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; 
})=>(
                        <li key={each.actor_id}>{each.first_name} {each.last_name} {each.last_update}</li>
                    ))
                }
            </ul>
        </div>
    );
}
