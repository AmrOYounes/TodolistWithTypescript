
  interface PostRequstPayload {
    ClientId: string;
    GrantType: string;
    Password: string;
    UserName: string;
  }
  
   interface postResultResult {
    access_token: string
   }

   export type {
       PostRequstPayload,
       postResultResult,
   }