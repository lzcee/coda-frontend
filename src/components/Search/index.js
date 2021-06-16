import { useEffect, useState } from "react";
import { users } from "../../services/api";

import {
  Button,
  Container,
  Input,
  InputWrapper,
  Label,
  Layout,
} from "../../styles/common";
import Modal from "../Modal";
import Card from "./Card";
import Profile from "./Profile";
import { Filter, FilterWrap, FlexWrap, SearchButton, Title } from "./style";

import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const Search = () => {
  const [response, setResponse] = useState([]);
  const [profile, setProfile] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [filter, setFilter] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    area: null,
    programmingLanguage: null,
    softwares: null,
  });

  const area = ["Back-end", "Front-end", "Dados", "UI/UX Design", "Outra"];

  const programmingLanguages = [
    "Java",
    "Javascript",
    "HTML",
    "CSS",
    "React",
    "Angular",
    "Vue.js",
    "Node.js",
    "Flutter",
    "Android",
    "Swift",
    "Outras",
  ];

  const softwares = ["Figma", "Adobe XD", "Adobe Photoshop", "Jira", "Outros"];

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

  async function searchProfiles() {
    try {
      let filterQuery = Object.entries(query).reduce(
        (a, [k, v]) => (v ? ((a[k] = v), a) : a),
        {}
      );
      const result = await users.search(filterQuery);
      setResponse(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout>
      <Container>
        <FlexWrap>
          <Title>explorar</Title>
          <Filter onClick={() => setFilter(true)}>
            <FilterIcon />
            Filtrar
          </Filter>
        </FlexWrap>
        <FilterWrap>
          <Input
            type="text"
            placeholder="pesquisar por nome"
            value={query.name}
            onChange={(event) => {
              setQuery({ ...query, name: event.target.value });
            }}
          />
          <SearchButton onClick={() => searchProfiles()}>
            <SearchIcon />
          </SearchButton>
        </FilterWrap>
        {filter && (
          <Modal open={setFilter}>
            <InputWrapper>
              <InputWrapper>
                <Label>Área:</Label>
                <Autocomplete
                  value={query.area}
                  size="small"
                  onChange={(event, newValue) => {
                    setQuery({ ...query, area: newValue });
                  }}
                  options={area}
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" />
                  )}
                />
              </InputWrapper>
              <Label>Tecnologia:</Label>
              <Autocomplete
                value={query.programmingLanguage}
                size="small"
                onChange={(event, newValue) => {
                  setQuery({ ...query, programmingLanguage: newValue });
                }}
                options={programmingLanguages}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" />
                )}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Software:</Label>
              <Autocomplete
                value={query.softwares}
                size="small"
                onChange={(event, newValue) => {
                  setQuery({ ...query, softwares: newValue });
                }}
                options={softwares}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" />
                )}
              />
            </InputWrapper>
            <InputWrapper>
              <Button
                onClick={() => {
                  setFilter(false);
                  searchProfiles();
                }}
              >
                Filtrar
              </Button>
            </InputWrapper>
          </Modal>
        )}
      </Container>
      {response.map((user) => (
        <Card
          key={user.id}
          {...user}
          setModal={setProfile}
          setSelectedUser={setSelectedUser}
        />
      ))}
      {response.length === 0 && (
        <Container>
          <p>Não encontramos resultados para a sua busca.</p>
        </Container>
      )}
      {profile && (
        <Modal open={setProfile}>
          <Profile userId={selectedUser} />
        </Modal>
      )}
    </Layout>
  );
};

export default Search;
