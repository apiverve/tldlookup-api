# TLD Lookup API - PHP Package

TLD Lookup retrieves information about any top-level domain including its type (generic, country-code, sponsored) and the sponsoring organization responsible for managing it.

## Installation

Install via Composer:

```bash
composer require apiverve/tldlookup
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Tldlookup\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['tld' => 'com']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Tldlookup\Client;
use APIVerve\Tldlookup\Exceptions\APIException;
use APIVerve\Tldlookup\Exceptions\ValidationException;

try {
    $response = $client->execute(['tld' => 'com']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/tldlookup?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/tldlookup?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/tldlookup?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
