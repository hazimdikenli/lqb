import type {
  QueryResolvers,
  MutationResolvers,
  PurchaseOrderLineRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const purchaseOrderLines: QueryResolvers['purchaseOrderLines'] = () => {
  return db.purchaseOrderLine.findMany()
}

export const purchaseOrderLine: QueryResolvers['purchaseOrderLine'] = ({
  id,
}) => {
  return db.purchaseOrderLine.findUnique({
    where: { id },
  })
}

export const createPurchaseOrderLine: MutationResolvers['createPurchaseOrderLine'] =
  ({ input }) => {
    return db.purchaseOrderLine.create({
      data: input,
    })
  }

export const updatePurchaseOrderLine: MutationResolvers['updatePurchaseOrderLine'] =
  ({ id, input }) => {
    return db.purchaseOrderLine.update({
      data: input,
      where: { id },
    })
  }

export const deletePurchaseOrderLine: MutationResolvers['deletePurchaseOrderLine'] =
  ({ id }) => {
    return db.purchaseOrderLine.delete({
      where: { id },
    })
  }

export const PurchaseOrderLine: PurchaseOrderLineRelationResolvers = {
  purchaseOrder: (_obj, { root }) => {
    return db.purchaseOrderLine
      .findUnique({ where: { id: root?.id } })
      .purchaseOrder()
  },
}
