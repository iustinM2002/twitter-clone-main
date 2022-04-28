import { render, fireEvent, act } from '@testing-library/react'
import Login from '../pages/login';
import {LoginProvider} from '../context/LoginContext';
import {ProfileProvider} from '../context/ProfileContext'


describe('Home', () => {
  it('renders a heading', async () => {
    const onSubmitt = jest.fn()
    const {getByPlaceholderText,getByRole} = render(<LoginProvider><ProfileProvider><Login initialContacts={[]} onSubmitt={onSubmitt} /></ProfileProvider></LoginProvider>)
    await act(async () => {
      fireEvent.change(getByPlaceholderText(/email/i),{target:{value:'morosanuiustin@gmail.com'}})
      fireEvent.change(getByPlaceholderText(/password/i),{target:{value:'12345'}})
    })
    await act(async () => {
      fireEvent.submit(getByRole('button', { name: /next/i}));
    })
    expect(onSubmitt).toBeCalledTimes(0)
  })
})
