import { render } from '@testing-library/react'
import Home from '@/pages/index';
import { LoginProvider } from '../context/LoginContext';


it('renders homepage unchanged', () => {
  const { container } = render(<LoginProvider><Home initialContacts={[]}/> </LoginProvider>)
  
})
