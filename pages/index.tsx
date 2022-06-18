import dynamic from 'next/dynamic';
import { fetchUsers, fetchReposByUsername } from '@store/slices/users';
import { wrapper } from '@store/index';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { promiseResolver } from '@utils/helper';

const HomePage = dynamic(() => import('@containers/HomePage'), { ssr: false });

const Home = ({ data }) => {
  const router = useRouter();
  const defaultUserNameValue = router.query.username || '';
  const [formValue, setFormValue] = useState<{ userName: string | string[] }>({
    userName: defaultUserNameValue,
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
      queryUserName={defaultUserNameValue}
    />
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      const { username } = query;
      const paramUserName = String(username || '');

      if (username) {
        const getUsersData = promiseResolver(
          store.dispatch(fetchUsers(paramUserName))
        );
        const getReposData = promiseResolver(
          store.dispatch(fetchReposByUsername(paramUserName))
        );
        await getUsersData;
        await getReposData;

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
