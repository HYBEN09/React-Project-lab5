import axios from 'axios';
import { Banner } from '@/components';
import { useEffect, useState } from 'react';
import classes from './Recommend.module.scss';
import { FoodList } from '@/components/FoodList/FoodList';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Pagination } from '@/components/Pagination/Pagination';
import { ScrollButton } from '@/components/Button/ScrollButton/ScrollButton';

export default function Recommend() {
  useDocumentTitle('슬기로운 N밥 생활 | 추천');

  const postsPerPage = 20;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const API_URL = `https://api.odcloud.kr/api/15097008/v1/uddi:1e5a6f2e-3f79-49bd-819b-d17541e6df78?page=3&perPage=80&serviceKey=${
    import.meta.env.VITE_SERVICE_KEY
  }`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(API_URL);
        setPosts(data.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [API_URL, currentPage]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Banner />
      <h1 className={classes.title}> 서울 맛집 추천</h1>
      <FoodList posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <ScrollButton />
    </>
  );
}
