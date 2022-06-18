import HomePage from '@containers/HomePage';
import { fetchUsers, fetchReposByUsername } from '@store/slices/users';
import { wrapper } from '@store/index';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Home = ({ data }) => {
  const router = useRouter();
  const [formValue, setFormValue] = useState({
    userName: router.query.username || '',
  });

  const handleChange = (key: string, value: string | number) =>
    setFormValue({
      ...formValue,
      [key]: value,
    });

  const handleClick = () => router.replace(`?username=${formValue.userName}`);

  const handleClear = () => {
    router.replace('');
    handleChange('userName', '');
  };

  return (
    <HomePage
      userProfileData={data?.usersData}
      reposData={data?.reposData}
      handleClick={handleClick}
      formValue={formValue}
      handleChange={handleChange}
      handleClear={handleClear}
    />
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      const { username } = query;
      const paramUserName = String(username || '');

      if (username) {
        await store.dispatch(fetchUsers(paramUserName));
        await store.dispatch(fetchReposByUsername(paramUserName));

        return {
          props: {
            data: store.getState().users || {
              usersData: null,
              reposData: null,
            },
          },
        };
      }
    }
);
export default Home;
