import React from 'react';

const EuiIconESTokenCompSuggester = ({ title, titleId, ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      d="M4.71429 3.30457H13L13 10.4474H11.0348L8.98882 11.9819C8.92289 12.0314 8.82882 11.9843 8.82882 11.9019V10.4474H4.71429V8.59029H9.17857C9.31664 8.59029 9.42857 8.47836 9.42857 8.34029V5.41172C9.42857 5.27364 9.31664 5.16172 9.17857 5.16172H4.71429V3.30457ZM3.71429 10.4474V8.59029H2.25C2.11193 8.59029 2 8.47836 2 8.34029V5.41172C2 5.27364 2.11193 5.16172 2.25 5.16172H3.71429V3.30457C3.71429 2.75229 4.162 2.30457 4.71429 2.30457H13C13.5523 2.30457 14 2.75229 14 3.30457V10.4474C14 10.9997 13.5523 11.4474 13 11.4474H11.2348L8.30476 13.645C8.13995 13.7686 7.90476 13.651 7.90476 13.445V11.4474H4.71429C4.162 11.4474 3.71429 10.9997 3.71429 10.4474ZM8.42143 6.01901H4.85714V7.73299H8.42143C8.50427 7.73299 8.57143 7.66583 8.57143 7.58298V6.16901C8.57143 6.08616 8.50427 6.01901 8.42143 6.01901Z"
    />
  </svg>
);

export const icon = EuiIconESTokenCompSuggester;
