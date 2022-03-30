import Template1 from "../components/Template1"
import { Website } from "../interfaces"

interface Props {
  data: Website
  websiteData: Website
}

const IndexPage = ({ data }: Props) => {
  return <>{data[0].websiteId === 1 && <Template1 websiteData={data[0]} />}</>
}

export default IndexPage

export const getServerSideProps = async () => {
  const data = await fetch("http://localhost:3000/api/website").then(res => res.json())

  return {
    props: {
      data,
    },
  }
}
