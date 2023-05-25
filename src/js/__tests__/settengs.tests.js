import { Settings } from "../settings";

describe("Settings", () => {
  let settings;

  beforeEach(() => {
    settings = new Settings();
  });

  it("should return the default settings if no custom settings are set", () => {
    const expected = new Map([
      ["theme", "dark"],
      ["music", "trance"],
      ["difficulty", "easy"],
    ]);
    expect(settings.settings).toEqual(expected);
  });

  it("should allow custom settings to be set", () => {
    settings.setSetting("music", "rock");
    const expected = new Map([
      ["theme", "dark"],
      ["music", "rock"],
      ["difficulty", "easy"],
    ]);
    expect(settings.settings).toEqual(expected);
  });

  it("should allow custom settings to be reset", () => {
    settings.setSetting("music", "rock");
    settings.resetSetting("music");
    const expected = new Map([
      ["theme", "dark"],
      ["music", "trance"],
      ["difficulty", "easy"],
    ]);
    expect(settings.settings).toEqual(expected);
  });

  it("should allow multiple custom settings to be set", () => {
    settings.setSetting("music", "rock");
    settings.setSetting("difficulty", "hard");
    const expected = new Map([
      ["theme", "dark"],
      ["music", "rock"],
      ["difficulty", "hard"],
    ]);
    expect(settings.settings).toEqual(expected);
  });
});
