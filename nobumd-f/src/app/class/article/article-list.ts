export class ArticleList {
    constructor(
        public id: number,
        public version: number,
        public position: string,
        public charactor: string,
        public img: string,
        public title: string,
        public author: string,
        public last: string,
        public create: string,
        public caption: object,
        public scoreup: number,
        public scoredn: number,
        public views: number,
        public comments: number,
    ) { }
}
