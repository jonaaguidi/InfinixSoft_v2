import Footer from "@/components/Footer"
import Header_v2 from "../../components/Header_v2"
import { ReactQueryProvider } from "@/utils/ReactQueryProvider"

export const metadata = {
    title: 'InfinixSoft - Our Blog',
    description: 'Discover our Blogsite',
}

export default function BlogLayout({ children }) {
    return (
        <>
            <ReactQueryProvider>
                <Header_v2 />
                {children}
                <Footer />
            </ReactQueryProvider>
        </>
    )
}