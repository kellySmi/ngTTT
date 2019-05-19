import { Injectable } from "@angular/core";
import { Square } from "./square.model";

@Injectable()
export class StaticDataSource {
    private data: Square[];

    constructor() {
        this.data = new Array<Square>(
            new Square(1, ""),
            new Square(2, ""),
            new Square(3, ""),
            new Square(4, ""),
            new Square(5, ""),
            new Square(6, ""),
            new Square(7, ""),
            new Square(8, ""),
            new Square(9, ""));
    }

    getData(): Square[] {
        return this.data;
    }
}
