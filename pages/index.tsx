import Template1 from "../components/Template1"
import { Website } from "../interfaces"
import SimpleReactLightbox from "simple-react-lightbox"
interface Props {
  data: Website
  websiteData: Website
}

const IndexPage = ({ data }: Props) => {
  return (
    <>
      <SimpleReactLightbox>{data[0].websiteId === 1 && <Template1 websiteData={data[0]} />}</SimpleReactLightbox>
    </>
  )
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
