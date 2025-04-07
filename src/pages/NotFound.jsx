import NotFound404 from "@/components/NotFound404"
import { Helmet } from "react-helmet"

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>Página não encontrada | Conservatório Artallis </title>
                <meta name="description" content="Conservatório Artallis | Aprende" />
                    </Helmet>
            <section className="pt-20 lg:pt-4">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <NotFound404 />
                </div>
            </section>
        </>
    )
}

export default NotFound