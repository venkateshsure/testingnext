
export const metadata={
  title:"My First metadata",
  description:"therer is no description"
}


export default function RootLayout({children}: { 
  children: React.ReactNode }) {
  // console.log(children)
  return (
    <html lang="en">
      <body>
       <header style={{backgroundColor:"blue",padding:"1rem",color:"#fff"}}>
          <p>Headers</p>
       </header>
        <main>
          {children}
        </main>
        <footer style={{backgroundColor:"blue",padding:"1rem",color:"#fff"}}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}