import {render, screen, waitFor} from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import {rest} from "msw";
import {server} from "../../../mocks/server";

test('handles errors for scoops and toppings routes', async () => {
    server.resetHandlers(
        rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
            res(ctx.status(500))
        }),

        rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
            res(ctx.status(500))
        })
    )

    render(<OrderEntry />)

    await waitFor(async () => {
        const alert = await screen.findAllByRole('alert')
        expect(alert).toHaveLength(2)
    })


})

// skip할 테스트
// test.skip('', () => {})

// 단독실행(나머지 스킵)
// test.only('ㅋ', () => {})