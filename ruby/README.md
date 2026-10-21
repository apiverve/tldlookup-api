# TLD Lookup API - Ruby Gem

TLD Lookup retrieves information about any top-level domain including its type (generic, country-code, sponsored) and the sponsoring organization responsible for managing it.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_tldlookup'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_tldlookup
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_tldlookup'

# Initialize the client
client = APIVerve::Tldlookup::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ tld: "com" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ tld: "com" })
  puts response["data"]
rescue APIVerve::Tldlookup::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Tldlookup::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Tldlookup::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "tld": "com",
    "found": true,
    "type": "generic",
    "organization": "VeriSign Global Registry Services"
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/tldlookup?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/tldlookup?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/tldlookup?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
