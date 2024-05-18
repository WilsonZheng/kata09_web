describe("app spec", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("display table", () => {
        cy.get("tbody").find("tr").should("have.length", 4);
    });

    it('adds an item to the cart when the "Add" button is clicked', () => {
        const itemIdToAdd = "A";
        cy.contains("td", itemIdToAdd)
            .parent("tr")
            .within(() => {
                cy.get("button").contains("Add").click();
            });
        // Replace the following line with the actual behavior of your app
        // after adding an item to the cart, such as checking if the cart count has increased.
        cy.get("div").contains(`Items in the cart: ${itemIdToAdd}`);
        cy.get("div").contains("0.5");
    });
});
