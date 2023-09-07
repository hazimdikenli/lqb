import { Prisma, PurchaseOrder } from '@prisma/client'

import {
  purchaseOrders,
  purchaseOrder,
  createPurchaseOrder,
  updatePurchaseOrder,
  deletePurchaseOrder,
} from './purchaseOrders'
import type { StandardScenario } from './purchaseOrders.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('purchaseOrders', () => {
  scenario('returns all purchaseOrders', async (scenario: StandardScenario) => {
    const result = await purchaseOrders()

    expect(result.length).toEqual(Object.keys(scenario.purchaseOrder).length)
  })

  scenario(
    'returns a single purchaseOrder',
    async (scenario: StandardScenario) => {
      const result = await purchaseOrder({ id: scenario.purchaseOrder.one.id })

      expect(result).toEqual(scenario.purchaseOrder.one)
    }
  )

  scenario('creates a purchaseOrder', async () => {
    const result = await createPurchaseOrder({
      input: {
        docNumber: 'String4722659',
        totalAmount: 94421.85360028832,
        currencyCode: 'String',
        vendorId: 5224912,
        statusCode: 'String',
      },
    })

    expect(result.docNumber).toEqual('String4722659')
    expect(result.totalAmount).toEqual(new Prisma.Decimal(94421.85360028832))
    expect(result.currencyCode).toEqual('String')
    expect(result.vendorId).toEqual(5224912)
    expect(result.statusCode).toEqual('String')
  })

  scenario('updates a purchaseOrder', async (scenario: StandardScenario) => {
    const original = (await purchaseOrder({
      id: scenario.purchaseOrder.one.id,
    })) as PurchaseOrder
    const result = await updatePurchaseOrder({
      id: original.id,
      input: { docNumber: 'String87325032' },
    })

    expect(result.docNumber).toEqual('String87325032')
  })

  scenario('deletes a purchaseOrder', async (scenario: StandardScenario) => {
    const original = (await deletePurchaseOrder({
      id: scenario.purchaseOrder.one.id,
    })) as PurchaseOrder
    const result = await purchaseOrder({ id: original.id })

    expect(result).toEqual(null)
  })
})
