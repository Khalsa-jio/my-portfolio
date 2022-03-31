import Template1 from "../components/Template1"
import { Website } from "../interfaces"
import SimpleReactLightbox from "simple-react-lightbox"
import { useEffect, useState } from "react"
// interface Props {
//   data: Website
//   websiteData: Website
// }

const IndexPage = () => {
  const [data, setData] = useState<Website[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/api/website")
      const body = await result.json()
      setData(body)
    }
    fetchData()
  }, [])

  return <>{data.length > 0 && data[0].websiteId === 1 && <Template1 websiteData={data[0]} />}</>
}

export default IndexPage

// export const getServerSideProps = async () => {
//   const data = await fetch("/api/website/").then(res => res.json())

//   return {
//     props: {
//       data,
//     },
//   }
// }
