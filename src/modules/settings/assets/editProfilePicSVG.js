const editProfilePicSVG = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<circle cx="12.5" cy="12.5" r="12.5" fill="#788475" fill-opacity="0.8"/>
<rect x="3" y="2" width="20" height="20" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0" transform="translate(0.1019196) scale(0.015625)"/>
</pattern>
<image id="image0" width="64" height="64" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
`;
export default editProfilePicSVG;