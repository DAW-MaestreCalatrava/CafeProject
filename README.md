# CafeProject

Website for Onza Café in Ciudad Real. This project is optimized to work in Google Chrome browser.

## Pre-requisites

- Node.js (recommended version: 14.x or higher)
- npm (included with Node.js)
- Google Chrome Browser
- Live Server (installed automatically with npm install)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

To start the development server:

```bash
npm run dev
```

The project will automatically open in your default browser. For the best experience, make sure to use Google Chrome.
The server will run on port 2442 by default (http://localhost:2442).

## Project Overview

This is a modern web application for Onza Café, featuring:
- Specialty coffee menu
- Artisanal pastries
- Custom ordering system
- Responsive design
- Modern UI components

## Web Components

This project is built using native Web Components for better modularity and code reuse. Here are the main components:

### Structure Components
- `header-component`: Main navigation bar
  - Attributes:
    - `logo`: Logo URL
    - `menu-items`: Array of menu objects
    - `theme`: Header theme ('light'|'dark')

- `footer-component`: Page footer with contact information
  - Attributes:
    - `social-links`: Social media links
    - `contact-info`: Contact information
    - `year`: Current copyright year

- `headerfooter-component`: Component that combines header and footer for specific pages
  - Attributes:
    - `page-title`: Current page title
    - `show-footer`: Boolean to show/hide footer

### Section Components
- `section1-component`: Main landing section
  - Attributes:
    - `img`: Background image URL
    - `title`: Section title
    - `description`: Main description text
    - `button`: Button text

- `section2-component`: Secondary information section
  - Attributes:
    - `titulo`: Section title
    - `pPrincipal`: Main paragraph
    - `h2Seccion1`: First subsection title
    - `pSeccion1`: First subsection text
    - `h2Seccion2`: Second subsection title
    - `pSeccion2`: Second subsection text
    - `h2Seccion3`: Third subsection title
    - `pSeccion3`: Third subsection text

### Form Components
- `form-component`: Form container
  - Attributes:
    - `form-id`: Unique form ID
    - `submit-url`: Form submission URL
    - `method`: HTTP method ('GET'|'POST')

- `input-component`: Custom input fields
  - Attributes:
    - `type`: Input type ('text'|'email'|'password'|'number')
    - `label`: Field label
    - `required`: Required field boolean
    - `placeholder`: Placeholder text
    - `value`: Input value
    - `error-message`: Error message

- `textarea-component`: Custom text areas
  - Attributes:
    - `rows`: Number of rows
    - `label`: Field label
    - `required`: Required field boolean
    - `placeholder`: Placeholder text
    - `value`: Textarea value

- `button-component`: Styled buttons
  - Attributes:
    - `type`: Button type ('primary'|'secondary'|'danger')
    - `disabled`: Disable button boolean
    - `loading`: Loading state boolean
    - `icon`: Icon name (optional)

### User Components
- `profile-component`: User profile display
  - Attributes:
    - `user-id`: User ID
    - `avatar`: Profile image URL
    - `name`: User name
    - `role`: User role

### Utility Components
- `text-component`: Text handling component
  - Attributes:
    - `variant`: Text type ('title'|'subtitle'|'body'|'caption')
    - `color`: Text color
    - `align`: Alignment ('left'|'center'|'right')

- `icons-component`: Custom icon system
  - Attributes:
    - `name`: Icon name
    - `size`: Size ('sm'|'md'|'lg')
    - `color`: Icon color

Each component is encapsulated in its own directory within `/src/components/` and contains its independent logic, styles, and HTML structure. Components use Shadow DOM for style encapsulation and Custom Elements to define their behavior.

## Project Structure

```
./
├── src/                   # Main source code
│   ├── components/       # Web Components
│   │   ├── headerfooter-component/
│   │   ├── textarea/
│   │   ├── form/
│   │   ├── input/
│   │   ├── button-component/
│   │   ├── icons/
│   │   ├── profile/
│   │   ├── header/
│   │   ├── section2-component/
│   │   ├── section1/
│   │   ├── footer/
│   │   └── text/
│   ├── img/             # Image resources
│   ├── scripts/         # JavaScript files
│   └── css/            # Global styles
├── components/          # Additional components
├── requirements/        # Requirements documentation
├── node_modules/       # Node.js dependencies
├── index.html          # Main page
├── about.html         # About page
├── contact.html       # Contact page
├── main.js            # Main JavaScript file
├── package.json       # Project configuration
├── package-lock.json  # Dependencies versions
├── LICENSE            # License file
└── README.md          # Project documentation
```

## CSS Structure
The project uses three main CSS files:
- `reset.css`: Normalizes browser styles
- `global.css`: Global styles and variables
- `home.css`: Specific styles for the home page

## Browser Compatibility

This project is specifically optimized and tested for Google Chrome. While it may work in other browsers, optimal experience is not guaranteed outside of Chrome.

## Development

The project uses a local development server to facilitate the development process. Make sure to keep the server running (`npm run dev`) while working on the code.

Web Components are developed following modern web standards, using native browser APIs such as Shadow DOM and Custom Elements.


