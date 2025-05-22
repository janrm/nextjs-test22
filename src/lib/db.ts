import { PushSubscription } from 'web-push';


export const db = {subscriptions : {create : async ({data} : {data : PushSubscription}) => {console.log(JSON.stringify(data));}}}

