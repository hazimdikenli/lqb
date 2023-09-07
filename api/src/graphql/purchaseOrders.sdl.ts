export const schema = gql`
  type PurchaseOrder {
    id: Int!
    docNumber: String!
    docDate: DateTime!
    dueDate: DateTime
    totalAmount: Float!
    currencyCode: String!
    vendorId: Int!
    vendorEmail: String
    statusCode: String!
    memo: String
    privateNote: String
    createdAt: DateTime!
    updatedAt: DateTime
    lines: [PurchaseOrderLine]!
  }

  type Query {
    purchaseOrders: [PurchaseOrder!]! @requireAuth
    purchaseOrder(id: Int!): PurchaseOrder @requireAuth
  }

  input CreatePurchaseOrderInput {
    docNumber: String!
    docDate: DateTime!
    dueDate: DateTime
    totalAmount: Float!
    currencyCode: String!
    vendorId: Int!
    vendorEmail: String
    statusCode: String!
    memo: String
    privateNote: String
  }

  input UpdatePurchaseOrderInput {
    docNumber: String
    docDate: DateTime
    dueDate: DateTime
    totalAmount: Float
    currencyCode: String
    vendorId: Int
    vendorEmail: String
    statusCode: String
    memo: String
    privateNote: String
  }

  type Mutation {
    createPurchaseOrder(input: CreatePurchaseOrderInput!): PurchaseOrder!
      @requireAuth
    updatePurchaseOrder(
      id: Int!
      input: UpdatePurchaseOrderInput!
    ): PurchaseOrder! @requireAuth
    deletePurchaseOrder(id: Int!): PurchaseOrder! @requireAuth
  }
`
