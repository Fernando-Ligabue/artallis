import { usePost } from "@/hooks/usePosts";
import SkelletonLoader from "../SkelletonLoader";
import PostCard from "./PostCard";
import { useState } from "react";

const ContentNews = () => {
    const { postData, loading, error } = usePost();
    const [visible, setVisible] = useState(6);

    const loadMore = () => {
        setVisible((prevVisible) => prevVisible + 3);
    }

    if (loading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center w-full max-w-[1140px] mt-14">
                {Array.from({ length: 6 }).map((_, index) => (
                    <SkelletonLoader key={index} />
                ))}
            </div>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section className="container flex flex-col items-center justify-center py-14">
            <div className="w-full max-w-[1140px] mx-auto flex-center flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {postData?.slice(0, visible).map((post) => (
                        <PostCard
                            key={post.slug.current}
                            id={post._id}
                            title={post.title}
                            slug={post.slug.current}
                            poster={post.poster}
                            publishedAt={post.publishedAt}
                        />
                    ))}
                </div>
                
                {visible < postData.length && (
                    <div className="mt-4">
                        <button
                            onClick={loadMore}
                            className="bg-artYellow-50 text-black font-barlow font-semibold py-3 px-10 shadow-sm hover:shadow-md mt-14 rounded-full uppercase transition-all ease-in-out duration-300"
                        >
                            Ver Mais
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ContentNews;
