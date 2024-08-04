# `react-use-snapchat-pixel`

`react-use-snapchat-pixel` is a lightweight React hook library for integrating Snapchat Pixel with your React application. It provides an easy way to initialize and track events with Snapchat Pixel, allowing you to measure the effectiveness of your ads and understand user interactions.

## Features

- **Automatic Initialization**: Initialize Snapchat Pixel with optional automatic page view tracking.
- **Event Tracking**: Track various events such as Add to Cart, Purchase, Rate, and more.
- **Debug Mode**: Optional debug mode to log initialization and event tracking information.
- **Customizable Configuration**: Set client deduplication IDs, configure events, and more.

## Installation

Install the package via npm or yarn:

```bash
npm install react-use-snapchat-pixel
```

```bash
yarn add react-use-snapchat-pixel
```

## Usage

### Initialization

Create an instance of `SnapchatPixel` and initialize it with your pixel ID:

```javascript
// src/hooks/useSnapchatPixel.ts
import { useEffect, useState } from 'react';
import { SnapchatPixel } from 'react-use-snapchat-pixel';

const useSnapchatPixel = () => {
  const [snapchatPixel, setSnapchatPixel] = useState<SnapchatPixel | null>(null);

  useEffect(() => {
    const initializeSnapchatPixel = async () => {
      const pixel = new SnapchatPixel({
        pixelID: 'PIXEL_ID',
      });

      pixel.init({});

      setSnapchatPixel(pixel);
    };

    initializeSnapchatPixel();
  }, []);

  return snapchatPixel;
};

export default useSnapchatPixel;
```

### Tracking Events

Track simple events:

```javascript
pixel.trackEvent('VIEW_CONTENT', {
  item_ids: ['1234'],
});
```

Track events with optional data and additional information:

```javascript
pixel.trackEvent('SUBSCRIBE', {
  item_ids: ['1234', '5678'],
  item_category: 'product',
  price: 100.0,
  currency: 'USD',
  client_dedup_id: 'd2e6f4f5-8b43-4d4e-bd45-9d9e5e6b2d9a',
});
```

### Available Events

- `ADD_CART`
- `ADD_BILLING`
- `ADD_TO_WISHLIST`
- `AD_CLICK`
- `AD_VIEW`
- `APP_OPEN`
- `ACHIEVEMENT_UNLOCKED`
- `COMPLETE_TUTORIAL`
- `INVITE`
- `LEVEL_COMPLETE`
- `LIST_VIEW`
- `LOGIN`
- `PAGE_VIEW`
- `PURCHASE`
- `RATE`
- `RESERVE`
- `SAVE`
- `SEARCH`
- `SHARE`
- `SIGN_UP`
- `SPENT_CREDITS`
- `START_CHECKOUT`
- `START_TRIAL`
- `SUBSCRIBE`
- `VIEW_CONTENT`

### API Reference

#### `SnapchatPixel`

**Constructor**

```typescript
new SnapchatPixel(props: Props)
```

- `pixelID` (string): Your Snapchat Pixel ID.
- `debug` (boolean, optional): Enable or disable debug mode (default: `true`).
- `pageViewOnInit` (boolean, optional): Automatically track Page View event on initialization (default: `true`).

**Methods**

- `init(props: InitProps)`: Initializes the Snapchat Pixel with optional properties.
- `trackEvent<K extends TrackableEventName>(eventName: K, data?: TrackableEventData[K], additionalData?: AdditionalData)`: Tracks an event with optional data and additional information.
- `getClientDeduplicationId()`: Retrieves the passed client deduplication ID.

## Configuration Options

**`Props` Interface**

- `pixelID` (string): Your Snapchat Pixel ID.
- `pageViewOnInit` (boolean, optional): Automatically track PageView event on initialization.
- `debug` (boolean, optional): Enable or disable debug mode.

**`InitProps` Interface**

- `user_email` (string, optional): Email address of the currently signed-in user.
- `ip_address` (string, optional): IP address of the device.
- `user_phone_number` (string, optional): Phone number (digits only).
- `user_hashed_email` (string, optional): SHA256 hash of the lower-cased and whitespace-removed email address.
- `user_hashed_phone_number` (string, optional): SHA256 hash of the lowercase and whitespace-removed phone number.

## License

This package is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contributing

Contributions are welcome! Please submit issues and pull requests on the [GitHub repository](https://github.com/geneloper/react-use-snapchat-pixel).

## Acknowledgments

This package uses the Snapchat Pixel library for tracking and analytics. For more information, visit the [Snapchat Pixel documentation](https://businesshelp.snapchat.com/s/article/snap-pixel-about?language=en_US).
