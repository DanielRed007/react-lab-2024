import { GetServerSideProps, NextPage } from "next";

interface FakeData {
  id: number;
  name: string;
}

interface Props {
  data: FakeData[];
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <h1>Fake Data</h1>
      <ul>{data && data?.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const fakeData: FakeData[] = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  return {
    props: {
      data: fakeData,
    },
  };
};

export default Home;
