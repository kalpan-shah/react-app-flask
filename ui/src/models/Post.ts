/**
 * @file Post.ts
 * @author Kalpan Shah <kalpanshah025@gmail.com>
 * @since 2023-02-28
 *
 * 
 */

// export interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }

export class Post {
    userId: number;
    id: number;
    title: string;
    body: string;

    constructor(userId: number, id: number, title: string, body: string) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }

    getSummary(): string {
        return `${this.title} - ${this.body.substring(0, 50)}...`;
    }
}

/* End of File */