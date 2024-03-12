import styled from 'styled-components';
import { QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';


const WrapperStyled = styled.div`
`;

const queryClient = new QueryClient()


function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <WrapperStyled>
          <Navigation/>
          {/* <RenderComponent/> */}
        </WrapperStyled>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
