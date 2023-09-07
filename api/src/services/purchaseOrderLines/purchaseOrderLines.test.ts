import { Prisma, PurchaseOrderLine } from '@prisma/client'

import {
  purchaseOrderLines,
  purchaseOrderLine,
  createPurchaseOrderLine,
  updatePurchaseOrderLine,
  deletePurchaseOrderLine,
} from './purchaseOrderLines'
import type { StandardScenario } from './purchaseOrderLines.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('purchaseOrderLines', () => {
  scenario(
    'returns all purchaseOrderLines',
    async (scenario: StandardScenario) => {
      const result = await purchaseOrderLines()

      expect(result.length).toEqual(
        Object.keys(scenario.purchaseOrderLine).length
      )
    }
  )

  scenario(
    'returns a single purchaseOrderLine',
    async (scenario: StandardScenario) => {
      const result = await purchaseOrderLine({
        id: scenario.purchaseOrderLine.one.id,
      })

      expect(result).toEqual(scenario.purchaseOrderLine.one)
    }
  )

  scenario(
    'creates a purchaseOrderLine',
    async (scenario: StandardScenario) => {
      const result = await createPurchaseOrderLine({
        input: {
          purchaseOrderId: scenario.purchaseOrderLine.two.purchaseOrderId,
          lineOrder: 9576600,
          itemId: 8143516,
          quantity: 3900912.6923358897,
          unitPrice: 9564489.462644689,
          amount: 8240303.580971926,
        },
      })

      expect(result.purchaseOrderId).toEqual(
        scenario.purchaseOrderLine.two.purchaseOrderId
      )
      expect(result.lineOrder).toEqual(9576600)
      expect(result.itemId).toEqual(8143516)
      expect(result.quantity).toEqual(new Prisma.Decimal(3900912.6923358897))
      expect(result.unitPrice).toEqual(new Prisma.Decimal(9564489.462644689))
      expect(result.amount).toEqual(new Prisma.Decimal(8240303.580971926))
    }
  )

  scenario(
    'updates a purchaseOrderLine',
    async (scenario: StandardScenario) => {
      const original = (await purchaseOrderLine({
        id: scenario.purchaseOrderLine.one.id,
      })) as PurchaseOrderLine
      const result = await updatePurchaseOrderLine({
        id: original.id,
        input: { lineOrder: 3299299 },
      })

      expect(result.lineOrder).toEqual(3299299)
    }
  )

  scenario(
    'deletes a purchaseOrderLine',
    async (scenario: StandardScenario) => {
      const original = (await deletePurchaseOrderLine({
        id: scenario.purchaseOrderLine.one.id,
      })) as PurchaseOrderLine
      const result = await purchaseOrderLine({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
