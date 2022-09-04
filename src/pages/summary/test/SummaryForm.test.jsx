import {render, screen, waitForElementToBeRemoved} from '@testing-library/react';
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";
/**
 * 1. 체크박스는 기본으로 언체크드
 * 2. 체크박스가 버튼을 활성화 & 체크박스가 해제되면 버튼 비활성화
 */
describe('SummaryForm test', () => {
    test('체크박스는 기본으로 unchecked 상태', () => {
        render(<SummaryForm />)

        const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i })

        expect(checkbox).not.toBeChecked()
    })

    test('체크박스 enables button', () => {
        render(<SummaryForm />)

        const checkbox = screen.getByRole('checkbox' , { name: /terms and conditions/i })
        const button = screen.getByRole('button', { name: 'Confirm order' })

        // 체크시 활성화
        userEvent.click(checkbox)
        expect(button).toBeEnabled()

        // 체크해제시 비활성화
        userEvent.click(checkbox)
        expect(button).toBeDisabled()
    })

    test('popover responds to hover', async () => {
        render(<SummaryForm />)
        const termsAndConditionSpan = screen.getByText(/terms and conditions/i)
        const nullPopover = screen.queryByText(/No ice cream will actually be delivered/i)
        // popover starts out hidden
        expect(nullPopover).not.toBeInTheDocument()

        // popover appears upon mouseover of checkbox label
        userEvent.hover(termsAndConditionSpan)
        const hoverPopover = screen.getByText(/No ice cream will actually be delivered/i)
        expect(hoverPopover).toBeInTheDocument()

        // popover disappears when we mouse out
        userEvent.unhover(termsAndConditionSpan)
        await waitForElementToBeRemoved(() =>
            screen.queryByText(/no ice cream will actually be delivered/i)
        );

    })
})