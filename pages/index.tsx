import HomePage from '@containers/HomePage';
import { fetchUsers } from '@store/slices/users';
import { wrapper } from '@store/index';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Home = ({ data }) => {
  const router = useRouter();
  const [formValue, setFormValue] = useState({
    userName: '',
  });

  const handleClick = () => router.replace(`?username=${formValue.userName}`);

  const handleChange = (key: string, value: string | number) =>
    setFormValue({
      ...formValue,
      [key]: value,
    });

  return (
    <HomePage
      data={data?.usersData}
      onClick={handleClick}
      formValue={formValue}
      handleChange={handleChange}
    />
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      const { username } = query;

      if (username) {
        await store.dispatch(fetchUsers(String(username || '')));

        return {
          props: { data: store.getState().users },
        };
      }
    }
);
export default Home;
