export const schema = gql`
  type PurchaseOrderLine {
    id: Int!
    purchaseOrderId: Int!
    lineOrder: Int!
    itemId: Int!
    quantity: Float!
    unitPrice: Float!
    amount: Float!
    description: String
    createdAt: DateTime!
    updatedAt: DateTime
    purchaseOrder: PurchaseOrder!
  }

  type Query {
    purchaseOrderLines: [PurchaseOrderLine!]! @requireAuth
    purchaseOrderLine(id: Int!): PurchaseOrderLine @requireAuth
  }

  input CreatePurchaseOrderLineInput {
    purchaseOrderId: Int!
    lineOrder: Int!
    itemId: Int!
    quantity: Float!
    unitPrice: Float!
    amount: Float!
    description: String
  }

  input UpdatePurchaseOrderLineInput {
    purchaseOrderId: Int
    lineOrder: Int
    itemId: Int
    quantity: Float
    unitPrice: Float
    amount: Float
    description: String
  }

  type Mutation {
    createPurchaseOrderLine(
      input: CreatePurchaseOrderLineInput!
    ): PurchaseOrderLine! @requireAuth
    updatePurchaseOrderLine(
      id: Int!
      input: UpdatePurchaseOrderLineInput!
    ): PurchaseOrderLine! @requireAuth
    deletePurchaseOrderLine(id: Int!): PurchaseOrderLine! @requireAuth
  }
`
