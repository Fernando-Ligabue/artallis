import { useEffect, useState } from "react";
import { client } from "../lib/sanity";

export const usePost = (slug = null) => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        let query = '*[_type == "post"]{_id, title, slug, poster, publishedAt} | order(publishedAt desc)';
        
        if (slug) {
          query = `*[_type == "post" && slug.current == $slug][0]{_id, title, slug, poster, publishedAt, content}`;
        }

        const data = await client.fetch(query, { slug });

        if (data) {
          setPostData(data);
        } else {
          setError("No post data found.");
        }
      } catch (err) {
        setError("Error fetching post data: " + err);
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [slug]);

  return { postData, loading, error };
};
