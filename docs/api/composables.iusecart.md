<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@shopware-pwa/composables](./composables.md) &gt; [IUseCart](./composables.iusecart.md)

## IUseCart interface

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

interface for [useCart](./composables.usecart.md) composable

<b>Signature:</b>

```typescript
export interface IUseCart 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [addProduct](./composables.iusecart.addproduct.md) | <code>({ id, quantity }: {</code><br/><code>        id: string;</code><br/><code>        quantity: number;</code><br/><code>    }) =&gt; void</code> | <b><i>(BETA)</i></b> |
|  [cart](./composables.iusecart.cart.md) | <code>Readonly&lt;Ref&lt;Readonly&lt;Cart&gt;&gt;&gt;</code> | <b><i>(BETA)</i></b> |
|  [cartItems](./composables.iusecart.cartitems.md) | <code>Readonly&lt;Ref&lt;Readonly&lt;LineItem[]&gt;&gt;&gt;</code> | <b><i>(BETA)</i></b> |
|  [changeProductQuantity](./composables.iusecart.changeproductquantity.md) | <code>({ id, quantity, }: {</code><br/><code>        id: string;</code><br/><code>        quantity: number;</code><br/><code>    }) =&gt; void</code> | <b><i>(BETA)</i></b> |
|  [count](./composables.iusecart.count.md) | <code>Readonly&lt;Ref&lt;Readonly&lt;number&gt;&gt;&gt;</code> | <b><i>(BETA)</i></b> |
|  [error](./composables.iusecart.error.md) | <code>Readonly&lt;Ref&lt;Readonly&lt;string&gt;&gt;&gt;</code> | <b><i>(BETA)</i></b> |
|  [loading](./composables.iusecart.loading.md) | <code>Readonly&lt;Ref&lt;Readonly&lt;boolean&gt;&gt;&gt;</code> | <b><i>(BETA)</i></b> |
|  [refreshCart](./composables.iusecart.refreshcart.md) | <code>() =&gt; void</code> | <b><i>(BETA)</i></b> |
|  [removeProduct](./composables.iusecart.removeproduct.md) | <code>({ id }: Partial&lt;Product&gt;) =&gt; void</code> | <b><i>(BETA)</i></b> |
|  [subtotal](./composables.iusecart.subtotal.md) | <code>Readonly&lt;Ref&lt;Readonly&lt;number&gt;&gt;&gt;</code> | <b><i>(BETA)</i></b> |
|  [totalPrice](./composables.iusecart.totalprice.md) | <code>Readonly&lt;Ref&lt;Readonly&lt;number&gt;&gt;&gt;</code> | <b><i>(BETA)</i></b> |
