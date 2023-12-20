import { getDataById } from "./api";

export async function getServerSideProps(context: any) {
    try {
      const { params } = context;
      const id = params.id;
  
      if (id && typeof id === 'string') {
        const data = await getDataById(id);
  
        return {
          props: {
            data,
          },
        };
      }
    } catch (error) {
      console.error('Error fetching data during server-side rendering:', error);
      return {
        props: {
          data: null,
        },
      };
    }
  }