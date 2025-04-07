import { Link, useParams } from "react-router-dom";
import { usePost } from "@/hooks/usePosts";
import urlBuilder from '@sanity/image-url';
import MainSection from "@/Layout/MainSection";
import NotFound404 from "@/components/NotFound404";
import { Helmet } from "react-helmet";
const SinglePost = () => {
  const { slug } = useParams();
  const { postData, loading, error } = usePost(slug);
  const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
  const dataset = import.meta.env.VITE_SANITY_DATASET;

  if (loading) {
    return <div>Carregado</div>;
  }

  if (error) {
    return <div className="max-w-[1140px] mx-auto"><NotFound404 /></div>;
  }

  return (
    <>
      <Helmet>
        <title>{postData.title} | Conservatório Artallis </title>
        <meta name="description" content="Conservatório Artallis | Aprende" />
      </Helmet>
      <MainSection className="container py-14">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-barlow text-artDarkBlue-50">{postData.title}</h1>
            <p className="text-lg text-artMidBlue-50">{new Date(postData.publishedAt).toLocaleDateString()}</p>
          </div>
          <div className="mt-8">
            <img
              src={urlBuilder({ projectId, dataset }).image(postData.poster.asset).url()}
              alt={postData.title}
              className="w-full h-auto max-h-[55vh] rounded-md object-cover object-center"
            />
          </div>
          <div className="mt-8">
            <div className="content">
              {postData.content?.map((block, index) => {
                if (block._type === "block") {
                  return <p key={index} className="font-barlow font-medium text-lg py-2">{block.children.map(child => child.text).join(" ")}</p>;
                } else if (block._type === "image") {
                  return <img key={index} src={urlBuilder({ projectId, dataset }).image(block.asset).url()} alt="Post image" className="w-full h-auto max-h-[50vh] object-cover object-top rounded-md" />;
                }
                return null;
              })}
            </div>
          </div>
          <div className="mt-4 flex-center">
            <Link
              to={`/noticias`}
              className="bg-artYellow-50 text-black font-barlow font-semibold py-3 px-10 shadow-sm hover:shadow-md mt-14 rounded-full uppercase transition-all ease-in-out duration-300"
            >
              Voltar
            </Link>
          </div>
        </div>
      </MainSection>
    </>
  );
}

export default SinglePost