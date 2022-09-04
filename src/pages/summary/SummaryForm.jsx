import React, {useState} from 'react';
import {Button, Form, OverlayTrigger, Popover} from "react-bootstrap";

function SummaryForm() {
    const [tcChecked, setTcChecked] = useState(false);

    const popover = (
        <Popover id="termsandconditions-popover">
            No ice cream will actually be delivered
        </Popover>
    );

    const checkboxLabel = (
        <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: 'blue' }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
    );

    return (
        <Form>
            <Form.Group controlId="terms-and-conditions">
                <Form.Check
                    type="checkbox"
                    checked={tcChecked}
                    onChange={(e) => setTcChecked(e.target.checked)}
                    label={checkboxLabel}
                />
            </Form.Group>
            <Button variant="primary" type="submit"
                    disabled={!tcChecked}
            >
                Confirm order
            </Button>
        </Form>
    )
}

export default SummaryForm;