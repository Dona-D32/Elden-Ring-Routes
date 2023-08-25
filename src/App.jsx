import React from 'react';
import Creatures from './components/Creatures';
import CreatureDetails from './components/CreatureDetails';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path="/" component={Creatures} />
          <Route path="/creatures/:id" component={CreatureDetails} />
        </Switch>
      </Router>
      <ReactQueryDevtoolsPanel isOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
