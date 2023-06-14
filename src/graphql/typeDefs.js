
export const typeDefs = `#graphql

    type Article {
        id: ID
        title: String!
        description: String
        content: String
        author: String
        categories: [String]
        images: [String]
        datePub: String
        keywords: [String]
    }

    type Author {
        id: ID
        name: String
        lasName: String
        email: String
        photo: String
        bio: String
        webSite: String
        donationAddress: DonationAddress
    }

    type DonationAddress {
        bankAccount: String
        paymentMethod: String
    }

    type Query {
        articles: [Article]
        authors: [Author]
    }
`;