import { render, fireEvent, act, waitFor } from '@testing-library/react'
import Form from '../components/registerlogincomponents/Form'

describe('Form', () => {

    it('submits the form', async () => {
      const onSubmit = jest.fn()
      const {getByPlaceholderText,getByTestId} = render(<Form onSubmit={onSubmit} errorForm={''} />)
      fireEvent.change(getByPlaceholderText(/email/i),{target:{value:'morosanuiustin@gmail.com'}})
      fireEvent.change(getByPlaceholderText(/password/i),{target:{value:'12345'}})
      await act(async () => {
        fireEvent.submit(getByTestId('form'));
      })
      expect(onSubmit).toBeCalledTimes(1)
    });
  
    it('show error if password or email are not found in the database', async () =>{
    const onSubmit = jest.fn()
    const {getByPlaceholderText,getByTestId} = render(<Form onSubmit={onSubmit} errorForm={''} />);
    fireEvent.change(getByPlaceholderText(/email/i),{target:{value:'morosanuiustin@gmail.com'}})
    fireEvent.change(getByPlaceholderText(/password/i),{target:{value:'12322e245'}});
    await act(async () => {
      fireEvent.submit(getByTestId('form'));
    })
    const errorMessage = getByTestId('error');
    expect(errorMessage).toHaveTextContent('')
  });

    it('not subbmiting if email is not an correct email', async () =>{
    const onSubmit = jest.fn()
    const {getByPlaceholderText,getByTestId} = render(<Form onSubmit={onSubmit} errorForm={''} />);
    fireEvent.change(getByPlaceholderText(/email/i),{target:{value:'morosanuiustin'}})
    fireEvent.change(getByPlaceholderText(/password/i),{target:{value:'12322e245'}});
    await act(async () => {
      fireEvent.submit(getByTestId('form'));
    })
    expect(onSubmit).toBeCalledTimes(0)
  });

    it('not subbmiting if password length is smaller than 4', async () =>{
    const onSubmit = jest.fn()
    const {getByPlaceholderText,getByTestId} = render(<Form onSubmit={onSubmit} errorForm={''} />);
    fireEvent.change(getByPlaceholderText(/email/i),{target:{value:'morosanuiustin@gmail.com'}})
    fireEvent.change(getByPlaceholderText(/password/i),{target:{value:'123'}});
    await act(async () => {
      fireEvent.submit(getByTestId('form'));
    })
    expect(onSubmit).toBeCalledTimes(0)
  })

})
