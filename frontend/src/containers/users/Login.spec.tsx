import { render, screen } from "@testing-library/react";
import Login from './Login';


describe('LoginForm', () => {
  test('renders the form with initial values', () => {
    render(<Login />);

    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

});
