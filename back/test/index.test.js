const app = require("../src/app.js");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/onsearch/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/onsearch/1").expect(200);
    });
    it(`Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"`, async () => {
      const response = (await agent.get("/rickandmorty/onsearch/1").expect(200))
        .body;
      expect(response).toHaveProperty("id");
      expect(response).toHaveProperty("name");
      expect(response).toHaveProperty("species");
      expect(response).toHaveProperty("gender");
      expect(response).toHaveProperty("status");
      expect(response).toHaveProperty("origin");
      expect(response).toHaveProperty("image");
    });
    it("si ahy un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/onsearch/13213213").expect(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("la informacion de login es correcta", async () => {
      const response = (
        await agent.get(
          "/rickandmorty/login?email=santiyvalenyleo@gmail.com&password=asd123"
        )
      ).body;
      expect(response.access).toEqual(true);
    });
    it("la informacion de login es incorrecta", async () => {
      const response = (
        await agent.get(
          "/rickandmorty/login?email=santiyvalenylfsdfseo@gmail.com&password=asd123"
        )
      ).body;
      expect(response.access).toEqual(false);
    });
  });
  describe("POST /rickandmorty/fav", () => {
    const character = { id: 1, name: "leo" };
    const character1 = { id: 2, name: "vale" };

    it("devuleve el elemento enviado por body", async () => {
      const response = (await agent.post("/rickandmorty/fav").send(character))
        .body;
      expect(response).toContainEqual(character);
    });
    it("devuleve el elemento enviado por body mas el anterior", async () => {
      const response = (await agent.post("/rickandmorty/fav").send(character1))
        .body;
      expect(response).toContainEqual(character1);
      expect(response).toContainEqual(character1);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    const character = { id: 1, name: "leo" };
    const character1 = { id: 2, name: "vale" };
    it("devuleve el arreglo correspondiente si no se elimina ningun personaje", async () => {
      const response = (await agent.delete("/rickandmorty/fav/:45454446")).body;
      expect(response).toContainEqual(character);
      expect(response).toContainEqual(character1);
    });
    it("elimina al personaje q se espesifica por id", async () => {
      const response = (await agent.delete("/rickandmorty/fav/:2")).body;
      expect(response).not.toContainEqual(character);
    });
  });
});
