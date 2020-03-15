import React from "react";

import styled from "styled-components";
import TodoList from "components/TodoList";

const Container = styled.div``;

function App() {
    return (
        <Container>
            <TodoList todos={[]} />
        </Container>
    );
}

export default App;
