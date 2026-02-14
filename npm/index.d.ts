declare module '@apiverve/tldlookup' {
  export interface tldlookupOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface tldlookupResponse {
    status: string;
    error: string | null;
    data: TLDLookupData;
    code?: number;
  }


  interface TLDLookupData {
      tld:          string;
      found:        boolean;
      type:         string;
      organization: string;
  }

  export default class tldlookupWrapper {
    constructor(options: tldlookupOptions);

    execute(callback: (error: any, data: tldlookupResponse | null) => void): Promise<tldlookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: tldlookupResponse | null) => void): Promise<tldlookupResponse>;
    execute(query?: Record<string, any>): Promise<tldlookupResponse>;
  }
}
