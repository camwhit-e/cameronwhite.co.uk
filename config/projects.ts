export default <Project[]> [
    {
        favourite: true,
        title: 'Jexactyl',
        repository: 'jexactyl/jexactyl',
        hero: 'Game & Software hosting platform interface',
        icon: 'https://www.jexactyl.com/_nuxt/img/logo.8b07b51.jpg',
        tags: ['docker', 'laravel', 'website', 'hosting', 'php'],
        summary: `
            Jexactyl is a Docker control interface used to power game servers and other types of Docker containers.
            It is derived from a project called Pterodactyl, and adds much more functionality and improves the UI.
            This project started in 2020 and has grown to over 400 stars with over 10,000 downloads. It is mainly
            used by SMBs in the server hosting sector to provide an interface to clients.
            <br /><br />
            Over the last four years, my role as lead maintainer involved shipping frequent yet stable updates which
            improved both the design of the interface, as well as the security and reliability users had come to expect
            with earlier versions. With the use of GitHub workflows and integrated testing, all releases were surveyed
            extensively to ensure no vulnerabilities were present upon release to the public.
            <br /><br />
            Jexactyl has seamlessly processed a vast amount of transactions thanks to the tight code integration with
            third-party payment providers such as PayPal and Stripe. Administrators can define the variables which control
            the billing API, allowing for quicker and easier payment solutions. This enabled businesses using Jexactyl to
            process one-off card payments straight through the Panel's UI, which costs less and is quicker.
        `,
        sections: [
            {
                title: 'Fully customisable UI & Features',
                imageUrl: 'jexactyl/theme.png',
                content: `
                    Jexactyl brings several improvements to the table in regards to UI, one of which being the dedicated theme
                    system available on Version 4. With this, administrators have the ability to modify the panel's theme without
                    any need for modifications to code. These changes happen on-the-fly and update in realtime, meaning site owners
                    can make their sites unique without relying on code updates.
                    <br /><br />
                    As well as this, Jexactyl is also designed with improvements in mind. The software features 'modules', which are
                    essentially features of the application which can be fully customisable. An example of this is the OAuth/SSO
                    authentication module, which allows admins to configure whether to use external SSO login providers and also
                    controls how they work to authenticate users.
                    <br /><br />
                    These changes provide site admins with the tools they need to grow their business quicker - personalised branding
                    and highly-configurable complex features help make Jexactyl provide a better experience.
                `,
            },
            {
                title: 'Payment gateway integration',
                imageUrl: 'jexactyl/billing.png',
                content: `
                    Third-party payment integration with gateways such as Stripe and PayPal is automagically baked in to Jexactyl's code.
                    Just provide your API key, and the software automatically registers with the gateway's API, pulls the products you have
                    available and lists them for sale assuming all sale criteria is met.
                    <br /><br />
                    Users can make, retrieve, update and cancel subscriptions all via Jexactyl's interface, allowing for improved continuity
                    and a billing experience where customers are not forced into redirection to manage their bill or payment details.
                    <br /><br />
                    While user experience is important, security takes first place - absolutely zero payment details are stored within Jexactyl
                    or any system databases. All payment details are requested during the payment processing which the gateway handles - it isn't
                    phyiscally possible for payment information to reach Jexactyl, and that's intentional.
                    <br /><br />
                `,
            },
        ]
    },
    {
        favourite: false,
        title: 'Influx',
        repository: 'cmrxnn/influx-agent',
        hero: 'Server-side monitoring & analytics',
        icon: '/projects/influx/logo.png',
        tags: ['monitor', 'statistics', 'golang', 'server', 'secure'],
        summary: `
            Influx is a server-side monitoring stack which connects multiple servers around the globe to an intuitive,
            elegant user interface written using Laravel and Tailwind.
            <br /><br />
            The software stack is comprised of two components - one, the website, shows users a detailed overview of
            system performance and allows system administrators to gain further insight into how their systems and services
            are running across a fleet of servers and infrastructure. Statistics like CPU, memory and disk usage are updated
            in realtime and historical graphs indicate previous performance levels.
            <br /><br />
            The other part of the stack, known as the 'Agent' or 'Daemon', is a lightweight peice of compiled code that runs
            as a binary on any operating system. This small binary runs in the background of the host system and periodically
            collects information from the system and sends it to the Influx Website's API, where it is then processed and stored.
        `,
        sections: [
            {
                title: 'Custom-built UI using TailwindCSS',
                imageUrl: 'influx/overview.png',
                content: `
                    Influx Website is designed to be as easy to use as possible, while also retaining important functionality and usability to
                    provide as much utility to the end user as possible. One of the ways this was achieved was through the use of Tailwind, a
                    vast CSS library which provides what are essentially 'shortcuts' to writing CSS in an application.
                    <br /><br />
                    Components were standardised throughout the application and isolated to improve exception handling and overall design.
                    By making each component isolated, any part of the page could return an error but the rest of the page will continue to
                    respond normally, allowing users to use critical site features even in the event of an outage for a specific component.
                    <br /><br />
                    Interface features like easy-to-use navigation, graphs and tooltips make themselves present in the application and make
                    the user experience in general significantly better. A dark mode by default ensures higher contrast to improve accessibility,
                    and reduces strain on the eyes for long analytics sessions.
                    <br /><br />
                    Pages were written using <a href={'https://laravel.com/docs/11.x/blade'}>Blade</a>, a frontend web framework which renders
                    views and data from the backend as part of the Laravel ecosystem. Features like direct PHP statement injection proved useful in
                    updating data, returning values and looping through sets while JavaScript injection through script tags allowed for improved
                    realtime data updates when viewing a monitoring agent through the UI.
                    <br /><br />
                    This software was written as coursework for a Level 3 (A-Level) qualification in Computer Science which achieved grade A. 
                `,
            },
        ]
    },
    {
        favourite: false,
        title: 'OmeroSystems',
        hero: 'Frontend design for development agency',
        icon: '/projects/omero/logo.png',
        tags: ['website', 'minimalist', 'reactjs', 'typescript', 'modular'],
        summary: `
            Omero Systems, a company which provides bespoke software to clients on request, invited me to re-design their landing page
            for their global operations with the aim of being minimalist, simple yet detailed enough to attract prospective clients.
            The project was written using a mixture of React, TypeScript, and TailwindCSS - it featured several pages, which were all
            highly modular and could be customised by the site owner without having to make changes to the codebase itself - all in the name
            of improving the experience my software delivers to end users.
            <br /><br />
            This project was started and finished in Q2 2024, and went live in May 2024. It has since been the homepage of this firm and
            continues to operate at 100% uptime backed by reliable code and a strong cluster of webservers. Changes can be made to the site quickly
            and easily due to advanced configuration files.
        `,
        sections: [
            {
                title: 'A minimalist design language',
                imageUrl: 'omero/homepage.png',
                content: `
                    Omero Systems&apos; website is designed to be minimal, unintrusive and clean. Simple UI components fill up the majority of the viewport,
                    and scales excellently between different display sizes thanks to the use of many breakpoints throughout the site&apos;s pages.
                    <br /><br />
                    The exclusion of obnoxious sale and advertisement sections promoted the brand&apos;s identity of simplism, giving the consumer exactly
                    what they wanted without unnecessary extras or supplements. Having each section of the website separated by large amounts of padding makes
                    the site feel less cluttered, and allows visitors to focus on each specific attention in order to reduce distractions.
                    <br /><br />
                    Expanding on this, the limited use of colour further demonstrates a desire to be minimal. With just one accent colour and the majority of the site
                    being dark grey, the main focus is on the content - not random other elements of the site that should not be of interest to the visitor.
                `,
            },
            {
                title: 'Everything you need, nothing you don\'t',
                imageUrl: 'omero/contact.png',
                content: `
                    While most competitor sites contain vast amount of unimportant information which can confuse visitors, Omero&apos;s design language involved being as
                    concise and helpful as possible - offering the same (or better!) experience at the fraction of the content.
                    <br /><br />
                    Like other sites I have designed, Omero included an in-depth configuration structure in the background - meaning that variables such as the page icon or
                    colours could be modified on-the-fly without the need to re-compile or re-deploy any code, saving time.
                    <br /><br />
                    This site was built with several functions in mind, one being static hosting. The React TypeScript application can be compiled into JavaScript elements
                    which can then be viewed simply by accessing a HTML page - meaning the entire site can be built and compiled into a single distribution folder which can
                    be statically served over a websever without the need for additional background processes - reducing the points of failure.
                `,
            },
        ]
    },
    {
        favourite: false,
        title: 'FalconHosting',
        hero: 'Frontend design for server provider',
        icon: '/projects/falconhosting/logo.png',
        tags: ['website', 'minimalist', 'reactjs', 'typescript', 'modular'],
        summary: `
            As part of a major business rebrand, FalconHosting comissioned me to create a new, detailed website for their customers in order to promote their latest products
            and services offered. As a server hosting provider, the firm wanted the website to be informative, competitive with larger brands and offer a cohesive platform
            for potential buyers to view the services the brand offers with ease. 
            <br /><br />
            Since Q2 2024, FalconHosting have been operating the new website I designed without even a single minor issue, with customer satisfaction improving as a result of
            the new experience the site brought to consumers. The project continues to be actively maintained and supported, with the introduction of new pages and features.
        `,
        sections: [
            {
                title: 'Design Consistency & Layout',
                imageUrl: 'falconhosting/home1.png',
                content: `
                    //
                    <br /><br />
                `,
            },
        ]
    }
];

/**
 * Project Configuration
 * 
 * This subdirectory and file control what projects
 * are shown on the 'Projects' page of this website.
 */

export interface Project {
    icon: string;
    title: string;
    hero: string;
    tags?: string[];
    favourite?: boolean;
    summary: string;
    repository?: string;
    sections: Section[];
}

interface Section {
    title: string;
    content: string;
    imageUrl: string;
}
