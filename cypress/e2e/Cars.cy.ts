interface Cars {
  _id: string;
  model: string;
  description: string;
  picture: string;
  seats: number;
  doors: number;
  largebags: number;
  smallbags: number;
  automatic: boolean;
  dayRate: number;
  _v: number;
  id: string;
}

describe("Cars", () => {
  it("Should fetch cars and display", () => {
    cy.intercept(
      {
        method: "GET",
        url: "http://localhost:5000/api/v1/cars",
      },
      (req) => {
        delete req.headers["if-modified-since"];
        delete req.headers["if-none-match"];
        delete req.headers["proxy-connection"];
      }
    ).as("getCars");
    // Visit Homepage
    cy.visit("/");
    cy.wait(7500);
    cy.get('a[href="/car"]').should("exist");
    cy.get('a[href="/car"]').click();
    // at car page
    let cars: Cars[] = [];
    cy.wait(7500);

    cy.wait("@getCars")
      .should(({ request, response }) => {
        //Assert Results
        expect(response?.statusCode).to.eq(200);
        expect(response?.body.data).be.not.null;
        expect(response?.body.data).to.have.length(response?.body.count);
        cars = response?.body.data;
      })
      .then(() => {
        console.log(cars);
        // Assert Display
        cars.forEach((car: Cars) => {
          cy.contains(car.model).should("be.visible");
        });
      });
  });
});
