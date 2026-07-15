declare module '@apiverve/tldlookup' {
  export interface tldlookupOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface tldlookupResponse {
    status: string;
    error: string | null;
    data: TLDLookupData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface TLDLookupData {
      tld:          null | string;
      found:        boolean | null;
      type:         null | string;
      organization: null | string;
  }

  export default class tldlookupWrapper {
    constructor(options: tldlookupOptions);

    execute(callback: (error: any, data: tldlookupResponse | null) => void): Promise<tldlookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: tldlookupResponse | null) => void): Promise<tldlookupResponse>;
    execute(query?: Record<string, any>): Promise<tldlookupResponse>;
  }
}
