import Footer from "@/components/Footer"
import Header_v2 from "../../components/Header_v2"

export const metadata = {
  title: 'InfinixSoft - Our Projects',
  description: 'Discover all our projects',
}

export default function ProjectsLayout({ children }) {
  return (
    <>
      <Header_v2 />
        {children}
      <Footer />
    </>
  )
}
