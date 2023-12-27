import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DynamicPage = () => {
  const router = useRouter();
  const { pageId } = router.query;
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    if (pageId) {
      // Fetch data based on pageId
      const apiUrl = `http://localhost:3000/api/getPagesById?pageId=${pageId}`;

      axios
        .get(apiUrl)
        .then((response) => {
          setApiData(response.data.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [pageId]);

  if (router.isFallback || !apiData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{apiData.sections?.[0]?.title || 'Dynamic Page'}</h1>
      <p>Page ID: {pageId}</p>
      {/* Display other data from apiData as needed */}
    </div>
  );
};

export default DynamicPage;
