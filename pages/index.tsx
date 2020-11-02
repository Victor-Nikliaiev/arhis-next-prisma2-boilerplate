import Link from "next/link";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {
  let res
  let data = await fetch("https://arhis-webtoken-api.herokuapp.com/verify?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ29ycCBJbmMuIiwiaWF0IjoxNjA0MTk3MjA1LCJleHAiOjE2MDQ4MDIwMDV9.eRbEQu-zGx31sKDvVS1Uuhtjv3Sf08LB82MURM1DBBs").then((respond)=>{
    return respond.json()
  }).then( data => {
    res = data
  });

  
  return {
    props: {
      content: res.valid.toString()
    }, // will be passed to the page component as props
  }
}

export default function IndexRoute({content}) {
  return <main>
    Hello, Index {content}
    <Link href="/pagetwo">
      <a>Page two</a>
    </Link>
  </main>;
}