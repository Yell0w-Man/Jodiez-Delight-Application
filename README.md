Jodiez Delight Application

Project Overview

Jodiez Delight is a responsive website developed for a pastry and bakery business. The application provides an online platform where customers can explore available products, learn about the business, discover custom-order services, and make enquiries or place orders through WhatsApp.

The project focuses on delivering a clean, accessible and user-friendly experience across desktop and mobile devices.

Live Application

"Visit Jodiez Delight" (https://jodiez-delight-application.vercel.app)

Features

- Home Page: Introduces the business, its brand identity and primary offerings.
- Explore Page: Provides customers with a detailed view of the products and services offered.
- Product Gallery: Showcases available pastries, cakes and other products.
- Custom Orders: Presents personalised ordering options for cakes, special treats and gift arrangements.
- WhatsApp Integration: Enables customers to make enquiries and place orders directly through WhatsApp.
- Responsive Navigation: Provides navigation functionality across desktop and mobile devices.
- Responsive Layout: Adapts the interface to different screen sizes.

Technologies

The application is built using the following technologies:

Technology| Purpose
Vue 3| Frontend framework
JavaScript| Application logic and interactivity
Tailwind CSS| Styling and responsive design
Vite| Development environment and build tool
Vue Router| Client-side routing
Git| Version control
GitHub| Source code management
Vercel| Application deployment

Installation and Setup

Prerequisites

Ensure that the following tools are installed on your system:

- Node.js
- npm
- Git

Clone the Repository

git clone https://github.com/Yell0w-Man/Jodiez-Delight-Application.git

Navigate to the Project Directory

cd Jodiez-Delight-Application

Install Dependencies

npm install

Configure Environment Variables

Create a ".env" file in the root directory of the project and configure the following variable:

VITE_WHATSAPP_NUMBER=your_whatsapp_number

Replace "your_whatsapp_number" with the business WhatsApp number, including the country code without the plus sign.

Run the Development Server

npm run dev

The development server will provide a local URL where the application can be accessed.

Environment Variables

The application uses environment variables to configure its WhatsApp integration.

Variable| Description
"VITE_WHATSAPP_NUMBER"| WhatsApp business number used to generate customer enquiry and ordering links.

The ".env" file should not be committed to the repository. When deploying the application, configure the required environment variable through the deployment platform's environment settings.

Deployment

The application is deployed using Vercel.

To deploy the application:

1. Push the project to a GitHub repository.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Deploy the application.

Design and Branding

The application follows the official Jodiez Delight brand identity, incorporating the following primary colours:

Colour| Hex Code
Coral| "#F0414A"
Brown| "#4A1D0C"
Gold| "#D4A72C"
Cream| "#FFF8F1"

The visual design aims to provide a consistent brand experience while maintaining readability, accessibility and responsive behaviour.

Project Status

The application is currently under development. Additional improvements and refinements may be introduced as development progresses.

Author

Stephen Nwankpa

GitHub: "Yell0w-Man" (https://github.com/Yell0w-Man) 
