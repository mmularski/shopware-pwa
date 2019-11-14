var Shopware6Client=function(t,a){"use strict";a=a&&a.hasOwnProperty("default")?a.default:a;const n={endpoint:"https://shopware-2.vuestorefront.io/sales-channel-api/v1",accessToken:"SWSCBVBBZET1RTFIYWY4YVLICA",contextToken:"",defaultPaginationLimit:10};let e={};const o=function(t={}){e=Object.assign(e,n,t)};o();const c=function(t){e=Object.assign(e,t)},s=e,r=a.create({});function i(){r.defaults.baseURL=s.endpoint,r.defaults.headers.common["sw-access-key"]=s.accessToken,s.contextToken?r.defaults.headers.common["sw-context-token"]=s.contextToken:delete r.defaults.headers.common["sw-context-token"]}i();const u=()=>"/category",d=t=>`/category/${t}`,f=t=>`/product/${t}`,l=t=>t?`/customer/address/${t}`:"/customer/address",g=(t,a)=>`/customer/address/${a}/default-${t}`,p=t=>g("billing",t),y=t=>g("shipping",t),w=()=>"/customer",m=()=>"/customer/login",h=()=>"/customer/logout",C=()=>"/customer/email",T=()=>"/customer/password",E=()=>"/checkout/cart",k=t=>`/checkout/cart/product/${t}`,I=t=>`/checkout/cart/line-item/${t}`,x=t=>`/checkout/cart/code/${t}`,P=()=>"/context",v=()=>"/currency",D=()=>"/language",F=()=>"/country",N=()=>"/payment-method",A=()=>"/shipping-method",O=()=>"/vsf/page";var V;!function(t){t[t.ONE=1]="ONE",t[t.FIVE=5]="FIVE",t[t.TEN=10]="TEN",t[t.TWENTY_FIVE=25]="TWENTY_FIVE",t[t.FIFTY=50]="FIFTY",t[t.SEVENTY_FIVE=75]="SEVENTY_FIVE",t[t.HUNDRED=100]="HUNDRED",t[t.FIVE_HUNDRED=500]="FIVE_HUNDRED"}(V||(V={}));const b=t=>{let a={};if(!t)return a;const{filters:n,sort:e,pagination:o,configuration:c}=t;if(o){const{limit:t,page:n}=o;t&&Object.values(V).includes(t)&&(a.limit=t),n&&(a.page=n,a.limit||(a.limit=s.defaultPaginationLimit))}if(e){let t=e.desc?"-":"";a.sort=`${t}${e.field}`}return n&&n.length&&(a.filter=n),c&&(a.associations=function t(a=[]){if(!a||!a.length)return;let n={};return a.forEach(a=>{n[a.name]={associations:t(a.associations)}}),n}(c.associations)),a};async function R(t){const a=(await r.patch(P(),t)).data["sw-context-token"];return S({contextToken:a}),{contextToken:a}}var $;function S(t={}){c(t),i()}return function(t){t.PRODUCT="product",t.CREDIT="credit",t.CUSTOM="custom",t.PROMOTION="promotion"}($||($={})),t.addCartItemQuantity=async function(t,a){let n={type:$.PRODUCT,quantity:a};return(await r.post(I(t),n)).data},t.addProductToCart=async function(t,a){return(await r.post(k(t),{quantity:a})).data},t.addPromotionCode=async function(t){return(await r.post(x(t))).data},t.changeCartItemQuantity=async function(t,a){let n={quantity:a};return(await r.patch(I(t),n)).data},t.clearCart=async function(){let t=(await r.post(E())).data["sw-context-token"];return S({contextToken:t}),{contextToken:t}},t.config=s,t.createCustomerAddress=async function(t){return(await r.post(l(),t)).data},t.deleteCustomerAddress=async function(t){await r.delete(l(t))},t.getAvailableCountries=async function(){return(await r.get(F())).data},t.getAvailableCurrencies=async function(){return(await r.get(v())).data},t.getAvailableLanguages=async function(){return(await r.get(D())).data},t.getAvailablePaymentMethods=async function(){return(await r.get(N())).data},t.getAvailableShippingMethods=async function(){return(await r.get(A())).data},t.getCart=async function(){return(await r.get(E())).data},t.getCategories=async function(t){return(await r.post(u(),b(t))).data},t.getCategory=async function(t){return(await r.get(d(t))).data.data},t.getCustomer=async function(){return(await r.get(w())).data.data},t.getCustomerAddress=async function(t){return(await r.get(l(t))).data.data},t.getCustomerAddresses=async function(){return(await r.get(l())).data.data},t.getPage=async function(t,a){return(await r.post(O(),{path:t})).data},t.getProduct=async function(t,a=null){return(await r.get(f(t),{params:a})).data.data},t.getProducts=async function(t){return(await r.post("/product",b(t))).data},t.getProductsIds=async function(){return(await r.post("/search-ids/product")).data},t.login=async function(t){const a=(await r.post(m(),t)).data["sw-context-token"];return S({contextToken:a}),{contextToken:a}},t.logout=async function(){await r.post(h()),S({contextToken:""})},t.register=async function(t){return(await r.post(w(),t)).data},t.removeCartItem=async function(t){return(await r.delete(I(t))).data},t.setCurrentCurrency=async function(t){let a={currencyId:t};return await R(a)},t.setCurrentLanguage=async function(t){let a={languageId:t};return await R(a)},t.setCurrentPaymentMethod=async function(t){let a={paymentMethodId:t};return await R(a)},t.setCurrentShippingMethod=async function(t){let a={shippingMethodId:t};return await R(a)},t.setDefaultCustomerBillingAddress=async function(t){return(await r.patch(p(t))).data},t.setDefaultCustomerShippingAddress=async function(t){return(await r.patch(y(t))).data},t.setup=function(t={}){o(t),i()},t.update=S,t.updateEmail=async function(t){await r.patch(C(),t)},t.updatePassword=async function(t){await r.patch(T(),t)},t.updateProfile=async function(t){await r.patch(w(),t)},t}({},axios);