export default class ErrorRepository {
    errors: Map<number, string>;

    constructor() {
        this.errors = new Map();
    }

    addError(code: number, description: string): void {
        this.errors.set(code, description);
    }

    translate(code: number): string {
        const errorDescription = this.errors.get(code);
        return errorDescription !== undefined ? errorDescription : 'Unknown error';
    }
}