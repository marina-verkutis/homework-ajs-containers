import Character from "./Character"

export default class Team {
    private members: Set<Character>;

    constructor() {
        this.members = new Set();
    }

    add(character: Character): void {
        if (this.members.has(character)) {
            throw new Error('Character already exists in the team.');
        }
        this.members.add(character);
    }

    addAll(...characters: Character[]): void {
        characters.forEach(character => {
            if (this.members.has(character)) {
                throw new Error('Character already exists in the team.');
            }
            this.members.add(character);
        });
    }

    getMembers(): Set<Character> {
        return this.members;
    }

    toArray(): Character[] {
        return [...this.members];
    }
}
