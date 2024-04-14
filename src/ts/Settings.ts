export default class Settings {
    private defaultSettings: Map<string, string>;
    private customSettings: Map<string, string>;

    constructor() {
        this.defaultSettings = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ]);
        this.customSettings = new Map();
    }

    setSetting(name: string, value: string): void {
        this.customSettings.set(name, value);
    }

    getSettings(): Map<string, string> {
        const mergedSettings = new Map(this.defaultSettings);

        this.customSettings.forEach((value, key) => {
            mergedSettings.set(key, value);
        });

        return mergedSettings;
    }
}