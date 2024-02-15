import { ReactQueryProvider } from "@/utils/ReactQueryProvider"
import Header from "@/components/Header"

export const metadata = {
    title: 'InfinixSoft - Our Blog',
    description: 'Discover our Blogsite',
}

export default function BlogLayout({ children }) {
    return (
        <>
            <ReactQueryProvider>
                <Header />
                {children}
            </ReactQueryProvider>
        </>
    )
}