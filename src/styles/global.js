import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  /* Reset css */

:root {
  --bold: 600;
  --normal: 400;
  --thin: 100;

  /* colors */
  --primary-color: #229DE8;
  --secondary-color: #EBF4F9;
  --tertiary-color: #EBF4F9;
  --quaternary-color: #EBF4F9;
  --dark-color: #424242;
  --white-color: #FFFFFF;
  --danger-color: #F38C8C;
  --warning-color: #ffe44b;
  --success-color: #4deb91;
  --info-color: #249AEE;
  --text-secondary: #939393,
}

:focus {
  outline: none;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100%;
}

html {
  font-size: 16px;
}

body {
  color: var(--dark-color);
  line-height: 1.5;
  background: var(--tertiary-color);
}

img {
  max-width: 100%;
  vertical-align: middle;
}

.font-medium {
  font-weight: 400;
}

.font-bold {
  font-weight: bold;
}

.font-Regular {
  font-weight: normal;
}

.font-light {
  font-weight: lighter;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

h1 {
  font-size: 28px;
}

h2 {
  font-size: 24px;
}

h3 {
  font-size: 18px;
  font-weight: var(--bold)
}

p {
  font-size: 16px;
}

b, strong {
  font-weight: var(--bold)
}

ul {
  list-style: none;
}

input[type=text],
input[type=password],
input[type=number],
input[type=email],
textarea,
select {
  outline: none;
  border: 2px solid var(--tertiary-color);
  padding: 8px;
  font-size: 16px;
  color: var(--dark-color);
  border-radius: 4px;
  background: var(--white-color);
}


input[type=text]::-webkit-input-placeholder,
input[type=password]::-webkit-input-placeholder,
input[type=number]::-webkit-input-placeholder,
input[type=email]::-webkit-input-placeholder {
  color: #A7ADB6;
}

input[type=text]:-ms-input-placeholder,
input[type=password]:-ms-input-placeholder,
input[type=number]:-ms-input-placeholder,
input[type=email]:-ms-input-placeholder {
  color: #A7ADB6;
}

input[type=text]::placeholder,
input[type=password]::placeholder,
input[type=number]::placeholder,
input[type=email]::placeholder {
  color: #A7ADB6;
}

input[type=text]:focus,
input[type=password]:focus,
input[type=number]:focus,
input[type=email]:focus,
textarea:focus {
  border: 2px solid var(--primary-color);
  transition: all 0.5s;
}

textarea {
  resize: vertical;
  min-height: 38px;
}

.no-button {
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

.thin {
  font-weight: var(--thin)
}

.hr {
  border: none;
  margin: 20px 0;
  border-bottom: 1px solid #f6f7fb;
}

.form-group label {
  display: flex;
  flex-direction: column;
}

.form-group label p {
  margin-bottom: 8px;
}

/* Color classes */
/* Background */
.bg-primary {
  background-color: var(--primary-color);
}

.bg-secondary {
  background-color: var(--second-color);
}

.bg-tertiary {
  background-color: var(--tertiary-color);
}

.bg-dark {
  background-color: var(--dark-color);
}

.bg-white {
  background-color: var(--white-color);
}

.bg-danger {
  background-color: var(--danger-color);
}

.bg-warning {
  background-color: var(--warning-color);
}

.bg-success {
  background-color: var(--success-color);
}

.bg-info {
  background-color: var(--info-color);
}

/* Text */
.txt-primary {
  color: var(--primary-color);
}

.txt-secondary {
  color: #939393;
}

.txt-tertiary {
  color: var(--tertiary-color);
}

.txt-dark {
  color: var(--dark-color);
}

.txt-white {
  color: var(--white-color);
}

.txt-danger {
  color: var(--danger-color);
}

.txt-warning {
  color: var(--warning-color);
}

.txt-success {
  color: var(--success-color);
}

.txt-info {
  color: var(--info-color);
}

.txt-placeholder {
  color: #A7ADB6;
}

.txt-white {
  color: var(--white-color);
}

/* Components styleds */
.card {
  box-sizing: border-box;
  background: #ffffff;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}

/* Flexbox */
.flex {
  display: flex !important;
}

.f-row {
  flex-direction: row !important;
}

.f-column {
  flex-direction: column !important;
}

.f-row-reverse {
  flex-direction: row-reverse !important;
}

.f-column-reverse {
  flex-direction: column-reverse !important;
}

.f-wrap {
  flex-wrap: wrap;
}

.j-c-center {
  justify-content: center !important;
}

.j-c-start {
  justify-content: flex-start !important;
}

.j-c-end {
  justify-content: flex-end !important;
}

.j-c-between {
  justify-content: space-between !important;
}

.j-c-around {
  justify-content: space-around !important;
}

.a-i-center {
  align-items: center !important;
}

.a-i-start {
  align-items: flex-start !important;
}

.a-i-end {
  align-items: flex-end !important;
}

/* Margin classes */
.m-0 {
  margin: 0px;
}

.m-1 {
  margin: 8px;
}

.m-2 {
  margin: 16px;
}

.m-3 {
  margin: 32px;
}

.mt-0 {
  margin-top: 0px;
}

.mt-1 {
  margin-top: 8px;
}

.mt-2 {
  margin-top: 16px;
}

.mt-3 {
  margin-top: 32px;
}

.mr-0 {
  margin-right: 0px;
}

.mr-1 {
  margin-right: 8px;
}

.mr-2 {
  margin-right: 16px;
}

.mr-3 {
  margin-right: 32px;
}

.mb-0 {
  margin-bottom: 0px;
}

.mb-1 {
  margin-bottom: 8px;
}

.mb-2 {
  margin-bottom: 16px;
}

.mb-3 {
  margin-bottom: 32px;
}

.ml-0 {
  margin-left: 0px;
}

.ml-1 {
  margin-left: 8px;
}

.ml-2 {
  margin-left: 16px;
}

.ml-3 {
  margin-left: 32px;
}

/* Padding classes */
.p-0 {
  padding: 0px;
}

.p-1 {
  padding: 8px;
}

.p-2 {
  padding: 16px;
}

.p-3 {
  padding: 32px;
}

.pt-0 {
  padding-top: 0px;
}

.pt-1 {
  padding-top: 8px;
}

.pt-2 {
  padding-top: 16px;
}

.pt-3 {
  padding-top: 32px;
}

.pr-0 {
  padding-right: 0px;
}

.pr-1 {
  padding-right: 8px;
}

.pr-2 {
  padding-right: 16px;
}

.pr-3 {
  padding-right: 32px;
}

.pb-0 {
  padding-bottom: 0px;
}

.pb-1 {
  padding-bottom: 8px;
}

.pb-2 {
  padding-bottom: 16px;
}

.pb-3 {
  padding-bottom: 32px;
}

.pl-0 {
  padding-left: 0px;
}

.pl-1 {
  padding-left: 8px;
}

.pl-2 {
  padding-left: 16px;
}

.pl-3 {
  padding-left: 32px;
}
`;
