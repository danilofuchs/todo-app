import React from "react";

import styled from "styled-components";
import TodoList from "components/TodoList";
import { useQuery, gql } from "@apollo/client";

const getTodos = gql``;

const Container = styled.div``;

function App() {
    useQuery();
    return (
        <Container>
            <TodoList todos={[]} />
        </Container>
    );
}

export default App;
