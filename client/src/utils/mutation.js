import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            savedBooks {
                bookId
            }
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
        token
        user {
            _id
            email
            username
        }
    }
}
`;

export const SAVE_BOOK = gql`
mutation saveBook($authors: [String], $description: String!, $bookId: String!, $title: String!, $image: String, $link: String) {
    saveBook(authors: $authors, description: $description, bookId: $bookId, title: $title, image: $image, link: $link) {
        _id
        username
        email
        savedBooks {
            bookId
        }
    }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        _id
        username
        email
        savedBooks {
            bookId
        }
    }
}
`;