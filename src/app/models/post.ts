export interface Post {
    id: number;
    title: string;
    createdAtUtc: number;
    updatedAtUtc: number;
    content: string;
    previewText: string;
    previewImage: string;
    published: boolean;
}
