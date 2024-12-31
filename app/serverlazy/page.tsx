

import dynamic from 'next/dynamic'

 
// Server Component:
const ServerComponent = dynamic(() => import('../components/ProductCard'),{ssr: true})

const ClientComponent = dynamic(() => import('../components/hello').then(mod => mod.Hello), { ssr:true })
 
export default function ServerComponentExample() {
  return (
    <div>
      <ServerComponent />
      <ClientComponent />
    </div>
  )
}