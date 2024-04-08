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
    <>
      <div>
        <main className="container mx-auto my-auto py-8 h-auto">
          <h2 className="text-4xl font-bold mb-4">
            NextJS + Context API Workshop
          </h2>

          <div className="flex justify-center items-center mt-10">
            <h2 className="text-2xl font-bold mb-4 mr-9">Dropdown</h2>
            <div className="flex justify-center flex-row w-3/6 h-72 rounded bg-yellow-500 shadow-lg mx-4"></div>
          </div>
        </main>
        <div>
          <h1>Fake Data</h1>
          <ul>
            {data && data?.map((item) => <li key={item.id}>{item.name}</li>)}
          </ul>
        </div>
      </div>
    </>
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
