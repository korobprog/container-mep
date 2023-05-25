export class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ["theme", "dark"],
      ["music", "trance"],
      ["difficulty", "easy"],
    ]);
    this.customSettings = new Map();
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.customSettings]);
  }

  setSetting(name, value) {
    this.customSettings.set(name, value);
  }

  resetSetting(name) {
    this.customSettings.delete(name);
  }
}
