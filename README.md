# LinkedIn Focus Feed

A Chrome extension that enhances your LinkedIn feed by removing distracting promotional content and marketing suggestions, allowing you to focus on meaningful updates from your professional network.

## Features

- Removes promoted posts
- Eliminates "Suggested" content
- Hides marketing-related content:
  - Posts with "Learn More" links
  - Posts with "Explore" links
- Removes job-related content:
  - "Search Open Jobs" posts
  - Job recommendations
  - Posts containing job-related content
- Creates a cleaner, more focused news feed
- Automatically handles dynamically loaded content

## Installation

1. Clone this repository or download it as a ZIP file
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension folder from this repository
5. The extension will automatically start working when you visit LinkedIn

## How It Works

This extension dynamically modifies your LinkedIn feed by removing promotional content, job-related posts, and marketing suggestions as they appear. It runs both on page load and continuously checks for new content every 500ms, providing you with a cleaner and more relevant feed focused on your professional network's updates.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## Ideas for Improvement

> This was created as a personal project and adheres to my own personal preferences. So some of the remaining elements may not be removed.

- Add configuration options to toggle which elements to hide
- Add functionality to remove other non-relevant elements
- Publish to Chrome Web Store (I'm not sure if I want to deal with that and LinkedIn terms of service garbage)

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
