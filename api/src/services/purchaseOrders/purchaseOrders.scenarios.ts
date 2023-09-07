import type { Prisma, PurchaseOrder } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PurchaseOrderCreateArgs>({
  purchaseOrder: {
    one: {
      data: {
        docNumber: 'String8977335',
        totalAmount: 5299958.012132988,
        currencyCode: 'String',
        vendorId: 7515861,
        statusCode: 'String',
      },
    },
    two: {
      data: {
        docNumber: 'String547008',
        totalAmount: 8643767.247682413,
        currencyCode: 'String',
        vendorId: 1300456,
        statusCode: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<PurchaseOrder, 'purchaseOrder'>
