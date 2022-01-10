
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import ToDo from './ToDo';

describe("todo testleri", ()=> {
    let button, input;

beforeEach(()=> {
    render(<ToDo/>);

button = screen.getByText("Ekle")
input = screen.getByLabelText("text")
});

test("ıtemler render edilmiş mi", ()=> {
    const items = screen.getAllByText(/ITEM/i);

    expect(items.length).toEqual(2);
})
test("input ve btn var mı", ()=> {
    expect(button).toBeInTheDocument()
    expect(input).toBeInTheDocument()
})




test("listeye ekleme", ()=> {
    const name = "Melih";
    userEvent.type(input, name);
    userEvent.click(button);
    expect(screen.getByText("Melih")).toBeInTheDocument()
})

})