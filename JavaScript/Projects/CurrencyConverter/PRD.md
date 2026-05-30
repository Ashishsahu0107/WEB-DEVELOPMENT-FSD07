# Currency Converter — Product Requirements Document (PRD)

## 1. What Is This App?
The Currency Converter is a simple web app hosted as a single HTML page. A user can:
- Pick a "From" country/currency.
- Pick a "To" country/currency.
- Enter an amount.
- Click Convert and instantly see the converted value.

The app works entirely in the browser with no server, no login, and no installation. Anyone can open `index.html` and use it.

## 2. Target Users
- **Travelers**: Want to quickly check how much their money is worth in another country.
- **Students**: Learning to build web apps with real APIs.
- **General public**: Anyone who needs a fast currency conversion.

## 3. Goals
- **Simple to use**: Convert money in three clicks with no confusion.
- **Real data**: Use live exchange rates from the internet, not hardcoded values.
- **Responsive**: Works well on mobile, tablet, and desktop.
- **Free to run**: Only free public APIs are used.

## 4. Tech Stack
| Tool | What It Is | Why It's Used |
| --- | --- | --- |
| HTML5 | Page structure | Builds dropdowns, buttons, inputs, and result areas |
| Bootstrap 5.3.6 | UI framework | Provides clean layout and responsive styles |
| Bootstrap Icons 1.13.1 | Icon library | Optional UI icons, e.g. swap or loading indicators |
| Vanilla JavaScript (ES6+) | App logic | Manages dropdown population, API calls, validation, and UI updates |
| `codes.json` | Local country/currency data | Stores country name, currency code, and country code |
| Exchange Rates API | Live currency data | Fetches current rates from `jsDelivr`/`fawazahmed0` |
| Flags API | Country flags | Displays a flag image for each selected country |

## 5. Project File Structure
```
currencyConvertor/
├── index.html   ← Main user page with layout and controls
├── script.js    ← JavaScript logic for dropdowns, flags, API calls, validation, and conversion
└── codes.json   ← Country/currency list with fields: country name, currency code, and country code
```

## 6. Current App Flow
1. **Page loads**
   - `script.js` fetches `codes.json`.
   - Both dropdowns are filled with country entries.
   - Each option value contains `currencyCode,countryCode`.
2. **Country is selected**
   - The selected option is parsed.
   - The flag URL is built and displayed.
3. **Convert is clicked**
   - Reads the "from" currency code.
   - Fetches live exchange rates for that currency.
   - Reads the target currency rate.
   - Calculates `amount × rate`.
   - Displays the result with the target currency code.

## 7. Functional Requirements
### FR-1: Load Country List into Dropdowns
- Both dropdowns must populate automatically on page load.
- Each item must show the country name.
- Each item must store `currencyCode,countryCode`.
- Skip entries with an empty currency code.
- Remove duplicate country entries.

### FR-2: Show Country Flag on Selection
- When `#country1` changes, `#flag1` updates immediately.
- When `#country2` changes, `#flag2` updates immediately.
- Build flag URL as `https://flagsapi.com/{CODE}/flat/64.png`.
- If the flag fails to load, show a fallback placeholder.

### FR-3: Perform Currency Conversion
- Read the currency code from `#country1`.
- Fetch live rates from the exchange-rate API.
- Look up the rate for `#country2`.
- Calculate `entered amount × exchange rate`.
- Display the result in `#newAmount`, formatted to two decimals.
- Include the target currency code in uppercase.
- If currencies are equal, return the original amount.

### FR-4: Input Validation
- If `#country1` is not selected, show: "Please select a 'From' country."
- If `#country2` is not selected, show: "Please select a 'To' country."
- If `#orgAmount` is empty, show: "Please enter an amount."
- If the amount is 0 or negative, show: "Amount must be greater than zero."
- All messages appear inline on the page, not in `alert()`.
- Error messages clear automatically when the input is corrected.

### FR-5: Handle API Errors Gracefully
- Wrap all `fetch()` calls in `try/catch`.
- If exchange-rate fetch fails, show: "Could not fetch exchange rates. Please check your internet connection."
- If flag loading fails, show a fallback image.
- Never show `undefined` or `NaN` to the user.
- Clear error messaging once the user retries successfully.

### FR-6: Show Loading Indicator
- Show a spinner or "Loading…" when conversion begins.
- Disable the Convert button while loading.
- Clear previous results while waiting.
- Re-enable the button after success or failure.

### FR-7: Set Default Countries on Page Load
- Default `#country1` to United States (USD).
- Default `#country2` to India (INR) or Euro (EUR).
- Show corresponding flags automatically.

### FR-8: Swap Button
- Add a swap button between the two country selectors.
- Clicking it swaps `#country1` and `#country2` values.
- Swap the displayed flags too.
- If an amount is entered, perform conversion automatically after swap.

## 8. UX Requirements
### UX-1: Clear Page Layout
- Page must have a visible heading: "Currency Converter".
- Country selectors should appear side by side.
- Amount input should be clearly labeled.
- Convert button should be prominent.
- Result should be displayed in a larger, bold style.

### UX-2: Immediate Visual Feedback
- When a country is selected, the flag updates instantly.
- The flag area should never show a broken image.
- Optionally use a smooth transition for flag changes.

### UX-3: Friendly Error Messages
- Use plain English for all errors.
- Display errors in red near the relevant field.
- Avoid technical jargon or browser alert dialogs.

### UX-4: Loading Feedback
- Show "Converting…" or a spinner during fetch.
- Button text should change from "Convert" to "Loading…".
- Remove old results when a new conversion starts.

### UX-5: Mobile Responsiveness
- On screens under 600px, stack the country selectors vertically.
- Ensure text is readable without zoom.
- Keep touch targets at least 44×44px.
- Avoid horizontal scroll on mobile.

### UX-6: Result Display
- Show the converted value to two decimal places.
- Include the target currency code.
- Optionally show the exchange rate used.
- Make the result visually distinct from other fields.
