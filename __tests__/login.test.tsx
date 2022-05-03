import { render } from "@testing-library/react";
import Home from '../pages/index';


import { LoginProvider } from '../context/LoginContext';
test('homepage match snapshot',() =>{
    const { container } = render(<LoginProvider><Home initialContacts={[]}/> </LoginProvider>)
    expect(container).toMatchSnapshot()
    
})