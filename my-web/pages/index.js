import Carousell from "../components/Carousell";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <Carousell />
        <Jumbotron />
      </Layout>
    </div>
  );
}
