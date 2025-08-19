import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import urlBuilder from '@sanity/image-url';

const PostCard = ({ id, title, slug, poster, publishedAt }) => {
    const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
    const dataset = import.meta.env.VITE_SANITY_DATASET;

    const imageUrl = poster?.asset ? 
        urlBuilder({ projectId, dataset }).image(poster.asset).url()
        : null;

    const formatDate = (date) => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');

        return `${day}/${month}/${year} | ${hours}:${minutes}`;
    };

    return (
        <div key={id}>
            <Link to={`/noticias/${slug}`} target="_self" className="relative">
                <div className="flex-center flex-col justify-start items-start gap-2.5 !p-0">
                    <div className="w-full">
                        <img
                            src={imageUrl}
                            className="h-full max-h-[250px] min-h-[250px] rounded-md object-cover w-full max-w-[384px] border border-artLightBlue-50"
                            width={384}
                            height={250}
                            alt={title}
                        />
                    </div>
                    <div className="absolute bottom-10 left-4 p-2">
                        <span className="text-white font-medium text-lg line-clamp-1 w-full text-left !font-barlow">{title}</span>
                        <span className="w-full text-left text-white !font-barlow font-light text-lg">
                            {formatDate(publishedAt)}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

PostCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string,
    poster: PropTypes.object,
    publishedAt: PropTypes.string,
}

export default PostCard;
