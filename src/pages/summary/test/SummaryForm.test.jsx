import {fireEvent, render, screen} from '@testing-library/react';
import SummaryForm from "../SummaryForm";
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
        fireEvent.click(checkbox)
        expect(button).toBeEnabled()

        // 체크해제시 비활성화
        fireEvent.click(checkbox)
        expect(button).toBeDisabled()
    })

})