import { StackedLayout } from '@/components/Layout';
import { SearchForm } from '../components';
import { Wrapper } from './Search.style';

export const Search = () => {
  return (
    <StackedLayout title="검색">
      <Wrapper>
        <SearchForm />
      </Wrapper>
    </StackedLayout>
  );
};
