import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import SignInPasswordTextFieldComponent from "./sign-in-password-text-field.component";

test('LanguageCheckbox, given selected item, item is checked', async () => {

    render(<SignInPasswordTextFieldComponent/>)

    const signInPasswordTextFieldComponent = await screen.getByTestId("outlined-adornment-password") as HTMLInputElement;

    expect(signInPasswordTextFieldComponent).toBeInTheDOM();
    expect(signInPasswordTextFieldComponent).toBeInTheDocument();

    user.type(signInPasswordTextFieldComponent, "admin");

    expect(signInPasswordTextFieldComponent.value).toBe("admin");

    //user.type()

    // const jsCheckbox = screen.getByRole('checkbox', { name: /javascript/i })
    //
    // user.click(jsCheckbox)
    //
    // expect(jsCheckbox).toBeChecked()
    // expect(screen.getByText(/javascript/i)).toHaveClass(
    //     'text-success font-weight-bold'
    // )
})
