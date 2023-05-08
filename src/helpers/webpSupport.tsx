import UAParser from 'ua-parser-js';

let webpSupported = false;

interface ParserResult {
  browser: {
    name?: string;
    version?: string;
    major?: string;
  };
  engine: {
    name?: string;
    version?: string;
  };
  os: {
    name?: string;
    version?: string;
  };
  device: {
    vendor?: string;
    model?: string;
    type?: string;
  };
  cpu: {
    architecture?: string;
  };
}

const parser = new UAParser(navigator.userAgent);
const parserResults: ParserResult = parser.getResult();

const input: string = parserResults.browser.version ?? '';
const firstDotIndex: number = input.indexOf('.');
const secondDotIndex: number = input.indexOf('.', firstDotIndex + 1);
const digitsBeforeFirstDot: number | undefined = parseInt(input.substring(0, firstDotIndex));
const digitsAfterFirstDot: number | undefined = parseInt(input.substring(secondDotIndex + 1));

//Chrome
if (
  (parserResults.browser.name?.includes('Chrome') &&
    digitsBeforeFirstDot === undefined &&
    parseInt(input) >= 9) ||
  (parserResults.browser.name?.includes('Chrome') &&
    digitsBeforeFirstDot !== undefined &&
    digitsBeforeFirstDot >= 9)
) {
  webpSupported = true;
}
//Safari
if (
  (parserResults.browser.name?.includes('Safari') &&
    digitsBeforeFirstDot === undefined &&
    parseInt(input) >= 14) ||
  (parserResults.browser.name?.includes('Safari') && digitsBeforeFirstDot >= 14)
) {
  webpSupported = true;
}
//Firefox
if (
  (parserResults.browser.name?.includes('Firefox') &&
    digitsBeforeFirstDot === undefined &&
    parseInt(input) >= 65) ||
  (parserResults.browser.name?.includes('Firefox') && digitsBeforeFirstDot >= 65)
) {
  webpSupported = true;
}
//Opera
if (
  (parserResults.browser.name?.includes('Opera') &&
    digitsBeforeFirstDot === undefined &&
    parseInt(input) >= 12) ||
  (parserResults.browser.name?.includes('Opera') && digitsBeforeFirstDot >= 12)
) {
  webpSupported = true;
}
// Opera Touch
if (
  (parserResults.browser.name?.includes('Opera Touch') &&
    digitsBeforeFirstDot === undefined &&
    parseInt(input) >= 2) ||
  (parserResults.browser.name?.includes('Opera Touch') && digitsBeforeFirstDot >= 2) ||
  (parserResults.browser.name?.includes('Opera Touch') &&
    digitsBeforeFirstDot === 1 &&
    digitsAfterFirstDot >= 3)
) {
  webpSupported = true;
}
//Microsoft Edge
if (
  (parserResults.browser.name?.includes('Edge') &&
    digitsBeforeFirstDot === undefined &&
    parseInt(input) >= 18) ||
  (parserResults.browser.name?.includes('Edge') && digitsBeforeFirstDot >= 18)
) {
  webpSupported = true;
}
//Facebook
if (
  (parserResults.browser.name?.includes('Facebook') &&
    digitsBeforeFirstDot === undefined &&
    parseInt(input) >= 350) ||
  (parserResults.browser.name?.includes('Facebook') && digitsBeforeFirstDot >= 350)
) {
  webpSupported = true;
}

export default webpSupported;
