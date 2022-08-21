import { trpc } from '../utils/trpc';
import { NextPageWithLayout } from './_app';
import { Header } from '~/components/Header';
import { Categories } from '~/components/Categories';

const IndexPage: NextPageWithLayout = () => {
  return (
    <>
      <Header />
      <Categories />
    </>
  );
};

export default IndexPage;
