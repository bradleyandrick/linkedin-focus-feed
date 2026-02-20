# LinkedIn Focus Feed

A Chrome extension that enhances your LinkedIn feed by removing distracting promotional content and marketing suggestions, allowing you to focus on meaningful updates from your professional network.

## Features

- **Configurable filters** — Popup UI lets you turn each filter on or off so you see the feed you want
- Removes **Suggested** posts
- Removes **Recommended for you** sections
- Removes **Jobs recommended for you** sections
- Removes **Promoted** posts
- Hides marketing-related content:
  - Posts with "Learn More" links
  - Posts with "Explore" links
- Removes job-related content:
  - "Search Open Jobs" posts
  - Posts containing job-related content
- Creates a cleaner, more focused news feed
- Automatically handles dynamically loaded content
- Works with LinkedIn’s current layout (supports both legacy and new DOM structure)

## Installation

1. Clone this repository or download it as a ZIP file
2. Open Chrome and go to `chrome://extensions/`
3. Turn on **Developer mode** (top right)
4. Click **Load unpacked** and choose the inner `linkedin-focus-feed` folder (the one that contains `manifest.json`, `content.js`, and `popup.html`)
5. The extension runs on LinkedIn automatically; click its icon to open the popup and choose which filters to apply

## How It Works

The extension reads your filter choices from the popup (stored in Chrome sync) and hides matching feed items on LinkedIn. It runs on page load and re-scans the feed every 500ms so new content is filtered as it appears. You can toggle any filter on or off at any time; changes apply immediately on open LinkedIn tabs.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## Ideas for Improvement

> This was created as a personal project and adheres to my own personal preferences. Some remaining elements may not be removed.

- Add more filter types or remove other non-relevant elements
- Publish to Chrome Web Store (LinkedIn terms of service and store policies are a consideration)

## License

MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
