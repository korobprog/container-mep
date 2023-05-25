import { ErrorRepository } from "../index";

describe("ErrorRepository", () => {
  let repo;

  beforeEach(() => {
    repo = new ErrorRepository();
    repo.addError(404, "Page not found");
    repo.addError(500, "Internal server error");
  });

  it("should return the correct error message for a given code", () => {
    const result = repo.translate(404);
    expect(result).toBe("Page not found");
  });

  it("should return 'Unknown error' for an unknown code", () => {
    const result = repo.translate(403);
    expect(result).toBe("Unknown error");
  });
});
