import type { Prisma, PurchaseOrderLine } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PurchaseOrderLineCreateArgs>({
  purchaseOrderLine: {
    one: {
      data: {
        lineOrder: 7302170,
        itemId: 4015824,
        quantity: 7287275.3776158625,
        unitPrice: 5472956.578561064,
        amount: 1041425.7561474626,
        purchaseOrder: {
          create: {
            docNumber: 'String4635685',
            totalAmount: 6206196.6678844625,
            currencyCode: 'String',
            vendorId: 8608026,
            statusCode: 'String',
          },
        },
      },
    },
    two: {
      data: {
        lineOrder: 2073795,
        itemId: 6750872,
        quantity: 6794212.472532781,
        unitPrice: 1207046.2835384065,
        amount: 3137446.316444883,
        purchaseOrder: {
          create: {
            docNumber: 'String8809541',
            totalAmount: 7371341.980640049,
            currencyCode: 'String',
            vendorId: 76471,
            statusCode: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  PurchaseOrderLine,
  'purchaseOrderLine'
>
