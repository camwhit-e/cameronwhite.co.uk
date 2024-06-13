export default <Project[]> [
    {
        title: 'Jexactyl',
        hero: 'Game & Software hosting platform interface',
        repository: 'jexactyl/jexactyl',
        icon: 'https://www.jexactyl.com/_nuxt/img/logo.8b07b51.jpg',
        summary: `
            Jexactyl is a Docker control interface used to power game servers and other types of Docker containers. It is derived from a project called Pterodactyl, and adds much more functionality and improves the UI. This project started in 2020 and has grown to over 400 stars with over 10,000 downloads. It is mainly used by SMBs in the server hosting sector to provide an interface to clients.

            Over the last four years, my role as lead maintainer involved shipping frequent yet stable updates which improved both the design of the interface, as well as the security and reliability users had come to expect with earlier versions. With the use of GitHub workflows and integrated testing, all releases were surveyed extensively to ensure no vulnerabilities were present upon release to the public.

            Jexactyl has seamlessly processed a vast amount of transactions thanks to the tight code integration with third-party payment providers such as PayPal and Stripe. Administrators can define the variables which control the billing API, allowing for quicker and easier payment solutions. This enabled businesses using Jexactyl to process one-off card payments straight through the Panel's UI, which costs less and is quicker.
        `,
        sections: [
            {
                title: 'Fully customisable UI & Features',
                imageUrl: 'jexactyl/theme.png',
                content: `
                    Jexactyl brings several improvements to the table in regards to UI, one of which being the dedicated theme system available on Version 4. With this, administrators have the ability to modify the panel's theme without any need for modifications to code. These changes happen on-the-fly and update in realtime, meaning site owners can make their sites unique without relying on code updates.

                    As well as this, Jexactyl is also designed with improvements in mind. The software features 'modules', which are essentially features of the application which can be fully customisable. An example of this is the OAuth/SSO authentication module, which allows admins to configure whether to use external SSO login providers and also controls how they work to authenticate users.

                    These changes provide site admins with the tools they need to grow their business quicker - personalised branding and highly-configurable complex features help make Jexactyl provide a better experience.
                `,
            },
            {
                title: 'Payment gateway integration',
                imageUrl: 'jexactyl/billing.png',
                content: `
                    Third-party payment integration with gateways such as Stripe and PayPal is automagically baked in to Jexactyl's code. Just provide your API key, and the software automatically registers with the gateway's API, pulls the products you have available and lists them for sale assuming all sale criteria is met.

                    Users can make, retrieve, update and cancel subscriptions all via Jexactyl's interface, allowing for improved continuity and a billing experience where customers are not forced into redirection to manage their bill or payment details.

                    While user experience is important, security takes first place - absolutely zero payment details are stored within Jexactyl or any system databases. All payment details are requested during the payment processing which the gateway handles - it isn't phyiscally possible for payment information to reach Jexactyl, and that's intentional.
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
    summary: string;
    repository: string;
    sections: Section[];
}

interface Section {
    title: string;
    content: string;
    imageUrl: string;
}
