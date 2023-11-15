import Footer from "@/components/Footer"
import Header_v2 from "../../components/Header_v2"


export const metadata = {
    title: 'InfinixSoft - Our Blog',
    description: 'Discover our Blogsite',
}

export default function BlogLayout({ children }) {
    return (
        <>
            <Header_v2 />
            {children}
            <Footer />
        </>
    )
}