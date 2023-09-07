import type {
  QueryResolvers,
  MutationResolvers,
  PurchaseOrderRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const purchaseOrders: QueryResolvers['purchaseOrders'] = () => {
  return db.purchaseOrder.findMany()
}

export const purchaseOrder: QueryResolvers['purchaseOrder'] = ({ id }) => {
  return db.purchaseOrder.findUnique({
    where: { id },
  })
}

export const createPurchaseOrder: MutationResolvers['createPurchaseOrder'] = ({
  input,
}) => {
  return db.purchaseOrder.create({
    data: input,
  })
}

export const updatePurchaseOrder: MutationResolvers['updatePurchaseOrder'] = ({
  id,
  input,
}) => {
  return db.purchaseOrder.update({
    data: input,
    where: { id },
  })
}

export const deletePurchaseOrder: MutationResolvers['deletePurchaseOrder'] = ({
  id,
}) => {
  return db.purchaseOrder.delete({
    where: { id },
  })
}

export const PurchaseOrder: PurchaseOrderRelationResolvers = {
  lines: (_obj, { root }) => {
    return db.purchaseOrder.findUnique({ where: { id: root?.id } }).lines()
  },
}
