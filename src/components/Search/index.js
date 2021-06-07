import { useEffect, useState } from "react";

import { users } from "../../services/api";

import { Container, Layout } from "../../styles/common";
import Modal from "../Modal";
import Card from "./Card";
import { Title } from "./style";

const Search = () => {
  const [response, setResponse] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await users.search();
        setResponse(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <Layout>
      <Container>
        <Title>explorar</Title>
      </Container>
      {response.map((user) => (
        <Card {...user} setModal={setModal} />
      ))}
      {modal && <Modal open={setModal}>teste</Modal>}
    </Layout>
  );
};

export default Search;
