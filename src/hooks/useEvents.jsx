import { useEffect, useState } from "react";
import { client } from "../lib/sanity";

export const useEvents = () => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        let query = '*[_type == "events"]{_id, title, datetime, poster, content}';

        const data = await client.fetch(query);

        if (data) {
          setEventsData(data);
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
  }, []);

  return { eventsData, loading, error };
};
