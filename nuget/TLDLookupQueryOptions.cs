using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.TLDLookup
{
    /// <summary>
    /// Query options for the TLD Lookup API
    /// </summary>
    public class TLDLookupQueryOptions
    {
        /// <summary>
        /// The top-level domain to look up (with or without leading dot)
        /// </summary>
        [JsonProperty("tld")]
        public string Tld { get; set; }
    }
}
