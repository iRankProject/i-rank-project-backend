
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCategoryInput {
    exampleField?: Nullable<number>;
}

export class UpdateCategoryInput {
    id: number;
}

export class CreatePostInput {
    exampleField?: Nullable<number>;
}

export class UpdatePostInput {
    id: number;
}

export class CreateVoteInput {
    exampleField?: Nullable<number>;
}

export class UpdateVoteInput {
    id: number;
}

export class Category {
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    abstract categories(): Nullable<Category>[] | Promise<Nullable<Category>[]>;

    abstract category(id: number): Nullable<Category> | Promise<Nullable<Category>>;

    abstract posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;

    abstract post(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract votes(): Nullable<Vote>[] | Promise<Nullable<Vote>[]>;

    abstract vote(id: number): Nullable<Vote> | Promise<Nullable<Vote>>;
}

export abstract class IMutation {
    abstract createCategory(createCategoryInput: CreateCategoryInput): Category | Promise<Category>;

    abstract updateCategory(updateCategoryInput: UpdateCategoryInput): Category | Promise<Category>;

    abstract removeCategory(id: number): Nullable<Category> | Promise<Nullable<Category>>;

    abstract createPost(createPostInput: CreatePostInput): Post | Promise<Post>;

    abstract updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>;

    abstract removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract createUser(username: string, email: string, password: string): User | Promise<User>;

    abstract updateUser(email?: Nullable<string>, username?: Nullable<string>, id?: Nullable<string>): User | Promise<User>;

    abstract removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract createVote(createVoteInput: CreateVoteInput): Vote | Promise<Vote>;

    abstract updateVote(updateVoteInput: UpdateVoteInput): Vote | Promise<Vote>;

    abstract removeVote(id: number): Nullable<Vote> | Promise<Nullable<Vote>>;
}

export class Post {
    exampleField?: Nullable<number>;
}

export class User {
    id: string;
    username: string;
    email: string;
}

export class Vote {
    exampleField?: Nullable<number>;
}

type Nullable<T> = T | null;
