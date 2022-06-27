import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
  return <div className={styles.container}></div>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default Home;
