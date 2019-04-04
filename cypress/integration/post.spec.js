let intro = `
Good morning from Cell Wizard LLC,

I am a mobile delivery service for iPhones in the Triangle.
`;

let body = `For sale is an iPhone X 64GB Space Gray Unlocked for any carrier with charger, glass screen protector (installed), and 90-day warranty for $525 firm.
`;

let outro = `With every purchase I offer one single labor free service for the specific device purchased- glass, battery, back glass, cameras, wifi, etc.  Bring me the part or I can quote you my at-cost pricing.  I can meet anywhere in the Triangle and my direct phone number is provided.

Any questions feel free to text or call me directly.  Thanks!`;

let condition = {
    new: 10,
    "like new": 20,
    excellent: 30,
    good: 40,
    fair: 50,
    salvage: 60
}


describe('My First Test', function() {
    it('Navigates to craigslist posting page', function() {
        cy.visit('https://raleigh.craigslist.org/');
        cy.contains('create a posting').click();
        cy.contains('for sale by owner').click();
        cy.contains('cell phones').click();
        cy.get('input#PostingTitle').type('hello world');
        cy.get('input#GeographicArea').type('Near Crabtree Mall');
        cy.get('input#postal_code').type('27612');
        cy.get('input[name="price"]').type('525');
        cy.get('textarea#PostingBody').type(`${intro}${body}${outro}`);
        cy.get('input[name="sale_manufacturer"]').type('Apple');
        cy.get('input[name="sale_model"]').type('A1865');
        cy.get('input[name="sale_size"]').type('5.8');
        cy.get('input[name="contact_phone"]').type('(919) 345-9939');
        cy.get('input[name="xstreet0"]').type('8101 Glenwood Ave.');
        cy.get('input[name="city"]').type('Raleigh');
        cy.get('input[name="FromEMail"]').type('wizards4224@gmail.com');
        cy.get('span#ui-id-2-button').type("like{enter}");
        cy.get('span#ui-id-3-button').type("apple{enter}");
        cy.contains('continue').click();
        cy.location('search', {timeout: 60000})
            .should('include', 'geoverify');
        cy.contains('continue').click();
        cy.contains('done with images').click();
        // cy.contains('publish').click();




        // dropdowns are hard
        // cy.get('select[name="condition"]').select('like new', {force: true});
        // cy.get('li#ui-id-6').click();
    });
});
