import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import SignInEmailTextFieldComponent from "./sign-in-email-text-field.component";

test('LanguageCheckbox, given selected item, item is checked', () => {

    render(<SignInEmailTextFieldComponent/>)

    // const jsCheckbox = screen.getByRole('checkbox', { name: /javascript/i })
    //
    // user.click(jsCheckbox)
    //
    // expect(jsCheckbox).toBeChecked()
    // expect(screen.getByText(/javascript/i)).toHaveClass(
    //     'text-success font-weight-bold'
    // )
})
